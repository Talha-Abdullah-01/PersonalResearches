import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import schoolRepo from '../repository/school-repo.js'



const incidentSchema = new Schema({
    attachments: [String],
    notes:[String],
    penalty:String,
    dateOfIncident: {type:Date, required:[true,'Date can not be empty']},
    studentsId:{type:[Number], required:[true, 'Students ID can not be empty. At least 1 student should be added']},
    incidentType:{type:String,required:[true,'Incident type can not be empty']},
    locationOfIncident:{type:String, required:[true,'Location can not be empty']},
    teacherRemark:{type:String, required:[true, 'Remarks can not be empty']},
    timeOfIncident:{type: String, required:[true, 'Time can not be empty']},
})



export default mongoose.model('Incident', incidentSchema)