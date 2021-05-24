export default class Students {

    async getStudent(idStudent) {
        let url = `/api/students/?idStudent=${idStudent}`
        const response = await fetch(url)
        const students = await response.json()
        return students
    }

    async addStudentIncident(incident) {
        let url = `/api/students/incidents`
        const configs = {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(incident)}
        return await fetch(url, configs)
    }

    async updateStudentIncident(incident, incidentNumber){
        let url = `/api/students/incidents/?incidentNumber=${incidentNumber}`
        const configs = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(incident)
        }
        return await fetch(url, configs)
    }

    async addIncidentType(typeName,valuet){//only called once
        let obj = {type: typeName, value:valuet}
        let url = `/api/students/incidents/incidentType`
        const configs = {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(obj)}
        return await fetch(url, configs)
    }

    async getIncidentTypes(){
        let url = `/api/students/incidents/incidentType`
        const response = await fetch(url)
        const incidentTypes = await response.json()
        return incidentTypes
    }

    async getAllIncidents(){
        let url = `/api/students/incidents`
        const response = await fetch(url)
        const incidents = await response.json()
        return incidents
    }

    async getStudentIncidents(idStudent){
        let url = `/api/students/incidents/${idStudent}`
        const response = await fetch(url)
        const incidents = await response.json()
        return incidents
    }

    async getIncident(incidentNumber){
        let url = `/api/students/incidents/?incidentNumber=${incidentNumber}`
        const response = await fetch(url)
        const incident = await response.json()
        return incident
    }

    async getIncidentsByGrade(grade){
        let url = `/api/school/incidents/${grade}`
        const response = await fetch(url)
        const incidents = await response.json()
        return incidents
    }

    async getStudentsByParentId(parentId){
        let url = `/api/students?idParent=${parentId}`
        const response = await fetch(url)
        const students = await response.json()
        return students
    }

    async getIncidentsByType(incidentType){
        let url = `/api//students/incidents?incidentType=${incidentType}`
        const response = await fetch(url)
        const incidentsByType = await response.json()
        return incidentsByType
    }

    async getStatistics(year){
        let url = `/api/incidents/aggregate/types/${year}`
        const response = await fetch(url)
        const statistics = await response.json()
        return statistics
    }
}