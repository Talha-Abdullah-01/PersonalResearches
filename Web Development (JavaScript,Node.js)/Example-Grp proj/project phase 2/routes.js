import express from 'express'
import schoolService from './service/school-service.js';

const router = express.Router()

router.route('/students')
    .get(schoolService.getStudents)
router.route('/school/incidents/:grade')
    .get(schoolService.getIncidentsByGrade)
router.route('/students/incidents/incidentType')
    .get(schoolService.getIncidentTypes)
    .post(schoolService.addIncidentType)
router.route('/students/incidents')
    .get(schoolService.getIncidents)
    .post(schoolService.addStudentIncident)
    .put(schoolService.updateStudentIncident)
router.route('/students/incidents/:idStudent')
    .get(schoolService.getStudentIncidents)
router.route('/usernames/:userName')
    .get(schoolService.getUserName)
router.route('/students/attachments/:incidentNumber')
    .post(schoolService.addAttachment)
router.route('/incidents/aggregate/types/:year')
    .get(schoolService.getStatistics)
export default router