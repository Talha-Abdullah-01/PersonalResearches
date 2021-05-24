import express from 'express'
import mongoose from "mongoose";
import morgan from 'morgan'
import router from './routes.js'
import {fileURLToPath} from "url";
import schoolRepo from './repository/school-repo.js';

const port = 4000
const app = express()

const currentUrl = new URL('./', import.meta.url);
const currentPath = fileURLToPath(currentUrl);
const uri = 'mongodb://127.0.0.1:27017/school-db'
const option = {useNewUrlParser : true , useUnifiedTopology : true}

mongoose.connect(uri , option , ()=>{
    console.log('Connected to database successfully')
})

app.use(express.static('public'))
app.use( express.static(currentPath) );
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
// await schoolRepo.populateDB() //only executed once to populate the database