import Student from '../model/student.js'
import Incident from '../model/incident.js';
import IncidentType from '../model/incident-type.js'
import User from "../model/user.js";
import fs from 'fs-extra';

class SchoolRepo {
    getStudent(idStudent) {
        return Student.findOne({idStudent: idStudent});

    }

    getStudents() {
        return Student.find({});
    }

    addStudentIncident(incident) {
        return Incident.create(incident)
    }

    updateStudentIncident(incident, incidentNumber) {
        return Incident.findByIdAndUpdate(incidentNumber, incident)
    }

    addIncidentType(incidentType) {//only called once
        return IncidentType.create(incidentType);
    }

    getIncidentTypes() {
        return IncidentType.find({});
    }

    getUserName(userNameWanted) {
        return User.findOne({userName: userNameWanted})
    }

    getIncidents() {
        return Incident.find({})
    }

    getIncident(incidentNumber) {
        return Incident.findOne({_id: incidentNumber})
    }

    getStudentIncidents(idStudent) {
        return Incident.find({studentsId: idStudent})
    }

    async getIncidentsByGrade(grade) {
        const students = await Student.find({grade: grade})
        const incidents = await Promise.all(students.map(async x => await Incident.find({studentsId: x.idStudent})))
        return incidents;
    }

    async addAttachment(content, incidentNumber) {
        let incident = await this.getIncident(incidentNumber);
        content.forEach(x=> incident.attachments.push(x))
        return this.updateStudentIncident(incident,incidentNumber);
    }
    getIncidentsByType(incidentType){
        return Incident.find({incidentType: incidentType})
    }

    getStudentsByParentId(parentId){
        return Student.find({idParent:parentId})
    }

    getStatistics(year){
        let date = new Date(new Date(`${year}/01/01`).toISOString())
        let endDate = new Date(new Date(`${date.getFullYear()+1}/01/01`).toISOString())
        return Incident.aggregate(
            [{
                $match: {
                    'dateOfIncident': {
                        $gte: date
                    }
                }
            }, {
                $match: {
                    'dateOfIncident': {
                        $lte: endDate
                    }
                }
            }, {
                $group: {
                    _id: '$incidentType',
                    total: {
                        $sum: 1
                    }
                }
            }]
        )
    }

    async populateDB() {
        const incidents = await fs.readJson('data/incidents.json');
        const incidentTypes = await fs.readJson('data/incident-types.json')
        const students = await fs.readJson('data/students.json')
        const users = await fs.readJson('data/users.json')

        for (const incident of incidents) {
            await this.addStudentIncident(incident);
        }
        for (const incidentType of incidentTypes) {
            await this.addIncidentType(incidentType);
        }
        for (const student of students) {
            await Student.create(student)
        }
        for (const user of users) {
            await User.create(user);
        }
    }
}

export default new SchoolRepo()