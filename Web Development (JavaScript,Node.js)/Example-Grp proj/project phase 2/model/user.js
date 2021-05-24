import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{type:String, required:[true,'First name can not be null']},
    lastName:{type:String, required:[true,'Last name can not be null']},
    idUser:{type:Number, required:[true, 'User id can not be null']},
    password: {type:Number, required:[true, 'Password can not be empty']},
    profession: {type: String, required: [true, 'Profession can not be empty']},
    userName:{type:String, required: [true, 'User name can not be empty']}
})

export default mongoose.model('User', userSchema)