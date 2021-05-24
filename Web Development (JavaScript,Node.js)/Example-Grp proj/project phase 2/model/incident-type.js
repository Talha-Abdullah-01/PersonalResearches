import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const incidentTypeSchema = new Schema({
    typeName:{type:String, required:[true,'Type name can not be empty.']},
    value: {type:String,required:[true,'Value can not be empty.']}
})

export default mongoose.model('IncidentType', incidentTypeSchema)