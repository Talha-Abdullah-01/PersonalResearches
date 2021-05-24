import Students from './Repositories/students-repo.js'

window.removeInvolved = removeInvolved


const studentRepo = new Students();
const form = document.querySelector('#report-form');
const submitBtn = document.querySelector('#submit-btn1')
const involvedInputID = document.querySelector('#peopleInvolved');
const handleStudentInvolved = document.querySelector('#addStudent')//add btn for the table
const table = document.querySelector('#table')

let studentsInvolved = []

submitBtn.addEventListener('click', handleSubmit)
handleStudentInvolved.addEventListener('click', handleAddInvolved)
document.addEventListener('DOMContentLoaded', checkIfEdit)


async function handleAddInvolved() {
    let enteredID = involvedInputID.value;
    try{
        const searchedStudent = await studentRepo.getStudent(enteredID)
        if (searchedStudent != undefined ) {
            if (studentsInvolved.findIndex(x => x.idStudent == searchedStudent.idStudent) == -1)
                studentsInvolved.push(searchedStudent);
            displayTable();
        }
    }catch(error) {
        alert('Student ID does not Exist')
    }

}

function displayTable() {
    let html = studentsInvolved.map(x => eachToHTML(x)).join('')
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Action</th>
            </tr>
        </thead>
        ${html}`
    if (studentsInvolved.length == 0)
        table.innerHTML = ""
}

function eachToHTML(x) {
    return `
    <tr>
        <td>${x.idStudent}</td>
        <td>${x.firstName}</td>
        <td>${x.grade}</td>
        <td> <i class="fa fa-trash" onclick="removeInvolved('${x.idStudent}')"></i></td>
    </tr>
    `
}

function removeInvolved(id) {
    let index = studentsInvolved.findIndex(x => x.idStudent == id);
    studentsInvolved.splice(index, 1)
    displayTable();
}

function form2Object(formElement) {
    const formData = new FormData(formElement) //key value
    const data = {}
    for (const [key, value] of formData) {

        data[key] = value
    }
    return data
}

async function handleSubmit(event) {
    event.preventDefault()
    let obj = form2Object(form);
    let isEditObj = localStorage.getItem('isEditUpdate')

    if (obj.dateOfIncident && obj.timeOfIncident && obj.teacherRemark && obj.locationOfIncident && obj.incidentType && studentsInvolved.length !=0) {
        obj.studentsId = studentsInvolved.map(x=>x.idStudent)
        if (isEditObj == -1) {
            obj.notes= []
            obj.attachments = []
            obj.penalty=""
            obj.studentsId = studentsInvolved.map(x=>x.idStudent)
            await studentRepo.addStudentIncident(obj);
            alert('Incident added!')
            location.reload()
        } else {
            let incidentTemp = await studentRepo.getIncident(isEditObj)
            incidentTemp = {...incidentTemp,...obj};
            await studentRepo.updateStudentIncident(incidentTemp, isEditObj)
            alert('Incident updated successfully!')
            window.location.href='./get-incidents.html'
            localStorage.setItem('isEditUpdate',`${isEditObj}`)
        }
    } else {
        alert('Please fill in the inputs')
    }
}

async function checkIfEdit() {
    let incidentNumber = localStorage.getItem('isEditUpdate')
    if (incidentNumber != -1) {
        let incidentUpdate = await studentRepo.getIncident(incidentNumber)
        const typyeDD = document.querySelector('#typeIncident');
        const locationInput = document.querySelector('#location');
        const dateInput = document.querySelector('#dateOfIncident');
        const timeInput = document.querySelector('#locationTime');
        const remarksInp = document.querySelector('#remarks');
        document.querySelector('#legendId').innerText = `Updating incident`;
        submitBtn.value = 'Update Incident'
        let students = await Promise.all(incidentUpdate.studentsId.map(async x=> await studentRepo.getStudent(x)))
        studentsInvolved = students
        displayTable()
        typyeDD.value = incidentUpdate.incidentType
        locationInput.value = incidentUpdate.locationOfIncident
        dateInput.value =  new Date(incidentUpdate.dateOfIncident).toISOString().substring(0,10);
        timeInput.value = incidentUpdate.timeOfIncident
        remarksInp.value = incidentUpdate.teacherRemark
    }
    const typeIncident = document.querySelector('#typeIncident');
    let types = await studentRepo.getIncidentTypes();
    let html = types.map(x=>eachTypeToHTML(x)).join('')
    typeIncident.innerHTML = html;
}
function eachTypeToHTML(x){
    return`
     <option value="${x.value}" selected>${x.typeName}</option>
    `
}