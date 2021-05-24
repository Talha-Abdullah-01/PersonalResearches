import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName:{
        type: String,
        required: [true, 'First name can not be empty. Please provide a name']
    },
    lastName:{
        type: String,
        required: [true, 'Last name can not be empty. Please provide a name']
    },
    age:{
        type: Number,
        required: [true, 'Age can not be empty.']
    },
    grade:{
        type: Number,
        required: [true, 'Grade can not be empty.']
    },
    idStudent: {
        type: Number,
        required: [true, 'Student id can not be empty.']
    },
    idParent: {
        type: Number,
        required: [true, 'Parent id can not be empty.']
    }
})

export default mongoose.model('Student', studentSchema)