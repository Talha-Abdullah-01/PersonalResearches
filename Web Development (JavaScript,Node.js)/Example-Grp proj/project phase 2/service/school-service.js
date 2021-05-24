import schoolRepo from '../repository/school-repo.js'
import {readFile, writeFile} from "fs/promises";
import formidable from "formidable";
import fs from 'fs'


class SchoolService {
    async getStudents(req, res) {
        try {
            if (req.query.idStudent) {
                const student = await schoolRepo.getStudent(req.query.idStudent)
                if (student)
                    res.status(200).json(student)
                else
                    res.status(404).send(`No Student with id: ${req.query.idStudent} was founded`)
            } else if(req.query.idParent){
                const students = await schoolRepo.getStudentsByParentId(req.query.idParent);
                if(students != '[]')
                    res.status(200).json(students)
                else
                    res.status(404).send(`No students with parent\'s id: ${req.query.idParent}`)
            }else {
                const students = await schoolRepo.getStudents()
                res.status(200).json(students)
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async addStudentIncident(req, res) {
        try {
            let incident = req.body
            if (incident)
                res.status(200).json(await schoolRepo.addStudentIncident(incident))
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async updateStudentIncident(req, res) {
        try {
            let incidentUpdated = req.body
            let incidentNumber = req.query.incidentNumber
            if (incidentUpdated)
                res.status(200).json(await schoolRepo.updateStudentIncident(incidentUpdated, incidentNumber))
            else
                res.status(404).send(`Update incident failed`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async addIncidentType(req, res) {//only called once
        try {
            let incidentType = req.body
            if (incidentType)
                res.status(200).json(await schoolRepo.addIncidentType(incidentType))
            else
                res.status(404).send(`Adding a new incident type failed`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getIncidentTypes(req, res) {
        try {
            res.status(200).json(await schoolRepo.getIncidentTypes())
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getUserName(req, res) {
        try {
            let userNameWanted = req.params.userName
            if (userNameWanted)
                res.status(200).json(await schoolRepo.getUserName(userNameWanted))
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getIncidents(req, res) {
        try {
            let incidentNumber = req.query.incidentNumber
            let incidentType = req.query.incidentType
            if (incidentNumber)
                res.status(200).json(await schoolRepo.getIncident(incidentNumber))
            else if (incidentType)
                res.status(200).json(await schoolRepo.getIncidentsByType(incidentType))
            else
                res.status(200).json(await schoolRepo.getIncidents())
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getStudentIncidents(req, res) {
        try {
            let idStudent = req.params.idStudent
            if (idStudent)
                res.status(200).json(await schoolRepo.getStudentIncidents(idStudent))
            else
                res.status(404).send(`No incidents found`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getIncidentsByGrade(req, res) {
        try {
            let grade = req.params.grade
            if (grade)
                res.status(200).json(await schoolRepo.getIncidentsByGrade(grade))
            else
                res.status(404).send(`No incidents found`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getStatistics(req, res) {
        try {
            if (req.params.year)
                res.status(200).json(await schoolRepo.getStatistics(req.params.year))
            else
                res.status(404).send(`No statistics generated`)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    async addAttachment(req, res) {
        const formData = formidable({multiples: true});
        formData.parse(req, async (err, fields, files) => {
            if (err) {
                alert(err)
                return;
            }
            const uploadedFiles = []
            if(!fs.existsSync(`./uploads/${req.params.incidentNumber}`))
                fs.mkdirSync(`./uploads/${req.params.incidentNumber}`,{recursive:true})//to create sub folder
            if (Array.isArray(files.profilePhotos)) {
                for (let file of files.profilePhotos) {
                    const fileName = file.name;
                    const fileContent = await readFile(file.path);
                    await writeFile(`./uploads/${req.params.incidentNumber}/${fileName}`, fileContent);
                    uploadedFiles.push(`/uploads/${req.params.incidentNumber}/${file.name}`);
                }
            } else {
                const fileName = files.profilePhotos.name;
                const fileContent = await readFile(files.profilePhotos.path);
                await writeFile(`./uploads/${req.params.incidentNumber}/${fileName}`, fileContent);
                uploadedFiles.push(`/uploads/${req.params.incidentNumber}/${files.profilePhotos.name}`);
            }
            let content = uploadedFiles.map(file => `<a target="_blank" href="${file}">${file}</a>`)
            try {
                if (req.params.incidentNumber)
                    await schoolRepo.addAttachment(content, req.params.incidentNumber)
                else
                    res.status(404).send('Error finding the incident number')
            } catch (error) {
                res.status(500).send(error)
            }
        });
    }
}

export default new SchoolService();