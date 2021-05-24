const displayArea = document.querySelector("#displayed-div")
const viewSelection = document.querySelector("#viewSelections")
const outerText = document.querySelector("#display-text")
const input = document.querySelector('#inputToDisp')
const btnSub = document.querySelector('#btn-sub')
const startDate = document.querySelector('#start')
const endDate = document.querySelector('#end')
const labelStart = document.querySelector('#startLabel')
const endLabel = document.querySelector('#endLabel')
const filerDD = document.querySelector('#filersDD-div')


viewSelection.addEventListener('change', displayGetIncidents);
btnSub.addEventListener('click', display)
document.addEventListener('DOMContentLoaded', checkIfParent)

import UserRepo from './Repositories/user-repo.js'

const userRepo = new UserRepo();
import Students from './Repositories/students-repo.js'

const studentRepo = new Students();

window.handleUpdate = handleUpdate
window.handleAddPenalty = handleAddPenalty
window.handlePenaltySubmit = handlePenaltySubmit
window.handleViewNotesAttachments = handleViewNotesAttachments
window.displayChange = displayChange

if (localStorage.getItem('isEditUpdate') == undefined) {
    localStorage.setItem('isEditUpdate', JSON.stringify({
        idStudent: -1,
        incidentNumber: -1
    }))
}

document.querySelector('#backBtnSum').addEventListener('click', () => {
    window.location.href = './summary-report.html'
})

async function checkIfParent() {
    let bool = false;
    const loggedInUser = userRepo.getTheLoggedInAcc();
    if (loggedInUser.profession == 'parent') {
        await handleIfParent();
        if (localStorage.getItem('parentDD') != '-1') {
            document.querySelector('#studentSelection').value = localStorage.getItem('parentDD')
            await displayChange()
            localStorage.setItem('parentDD', '-1')
        }
        bool = true;
        return bool;
    }
    if (localStorage.getItem('incidentId') != -1) {
        viewSelection.value = localStorage.getItem('DDValue')
        input.value = localStorage.getItem('inputValue')
        localStorage.setItem('incidentId', '-1')
        displayGetIncidents()
        await display()
    }
    if (localStorage.getItem('displayFromSummary') != 'no') {
        document.querySelector('#filersDD-div').innerHTML = ''
        document.querySelector('#inputs-div').innerHTML = ''
        document.querySelector('#backBtn-div').style.display = 'inline';
        input.innerHTML = '';
        let obj = JSON.parse(localStorage.getItem('infoFromSummary'))
        let type = localStorage.getItem('summaryType');
        type = type == 'misbehave' ? 'misbehaving' : type;
        document.querySelector('#title').innerText = `Incidents for ${type}`
        let incidents;
        if (type != '')
            incidents = await studentRepo.getIncidentsByType(localStorage.getItem('summaryType'))
        else {
            let incidentsOfArr = await studentRepo.getIncidentsByGrade(obj.gradeValue)
            incidents = incidentsOfArr.flat();
        }
        let incidentsFilteredDate = incidents.filter(x => {
            let date = new Date(x.dateOfIncident);
            if (date.getFullYear() == obj.yearInput)
                return x;
        })
        if (incidentsFilteredDate.length == 0) {
            alert(`No incidents for ${type} after the update!`)
        }
        await displayInfo(incidentsFilteredDate);
    }
}

async function handleIfParent() {
    const user = await userRepo.getTheLoggedInAcc();
    const students = await studentRepo.getStudentsByParentId(user.idUser)
    let html = students.map(x => eachStudentToOption(x)).join('')
    filerDD.innerHTML = `
    <h1>Please select a student from the dropdown:</h1>
    <select class="dropdown" name="getIncidentTypes" id="studentSelection" onchange="displayChange()" >
                <option value="" selected disabled>Choose a student</option>
                ${html}
            </select>
    `
}

async function displayChange() {
    let incidents = await studentRepo.getStudentIncidents(document.querySelector('#studentSelection').value)
    await displayInfo(incidents);
    await display(true)
}

function eachStudentToOption(student) {
    return `
    <option value="${student.idStudent}">${student.firstName} ${student.lastName} (${student.idStudent})</option>
    `
}


function displayGetIncidents() {
    btnSub.style.display = "inline";
    labelStart.style.display = "none";
    startDate.style.display = "none";
    endLabel.style.display = "none";
    endDate.style.display = "none";
    input.style.display = "inline";
    displayArea.innerHTML = ''
    if (viewSelection.value == "particularStudent") {
        outerText.innerText = "Enter Student ID : "
    } else if (viewSelection.value == "particularGrade") {
        outerText.innerText = "Enter Student Grade: "
    } else if (viewSelection.value == "allStudents") {
        outerText.innerText = "All incidents:"
        input.style.display = "none";
    } else if (viewSelection.value == "rangeDate") {
        startDate.style.display = "inline";
        endDate.style.display = "inline";
        labelStart.style.display = "inline";
        endLabel.style.display = "inline";
        input.style.display = "none";
    }
}

async function checkIfIDExist() {
    let studentIDExist = false;
    let enteredID = input.value;
    const student = await studentRepo.getStudent(enteredID)
    if (student != undefined) {
        studentIDExist = true
    } else {
        alert('Student ID does not exist')
    }
    return studentIDExist;
}

function hideBtnsIfParent(t) {
    for (let temp of t)
        temp.style.display = "none";
}

async function display(isParent) {
    if (isParent == true) {
        const hideUpdate = document.querySelectorAll('#update-btn')
        const hideNote = document.querySelectorAll('#note-btn')
        const hidePenalty = document.querySelectorAll('#penalty-btn')
        const hideAttachment = document.querySelectorAll('#attachment-btn')
        hideBtnsIfParent(hideUpdate)
        hideBtnsIfParent(hideNote)
        hideBtnsIfParent(hidePenalty)
        hideBtnsIfParent(hideAttachment)
    } else {
        if (viewSelection.value == "particularStudent") {
            if (await checkIfIDExist() == true) {
                const incidents = await studentRepo.getStudentIncidents(input.value)
                await displayInfo(incidents);
            }
        } else if (viewSelection.value == "particularGrade") {
            if (input.value >= 1 && input.value <= 12) {
                const studentsInGrade = await studentRepo.getIncidentsByGrade(input.value);
                await displayInfo(studentsInGrade.flat())
            } else {
                alert('Incorrect grade level')
            }
        } else if (viewSelection.value == "allStudents") {
            const incidents = await studentRepo.getAllIncidents()
            await displayInfo(incidents)
        } else if (viewSelection.value == "rangeDate") {
            const incidents = await studentRepo.getAllIncidents()
            let filteredByDate = filterIncidentsByDate(incidents)
            await displayInfo(filteredByDate)
        }
    }
}


async function displayInfo(incidents) {
    let count = 1;
    let html = incidents.map(x => eachToHTMLForIncidents(x, count++)).join('');
    displayArea.innerHTML = html;
    await incidents.forEach(async x => await displayInvolvedStudents(x._id))
}


function eachToHTMLForIncidents(x, count) {
    let noteText = 'No note added';
    let penaltyText = 'No penalty added';
    let imageText = 'No attachment added';
    if (x.notes)
        noteText = `<a href="./notes.html" onclick="handleViewNotesAttachments('${x._id}')">View notes</a>`
    if (x.penalty)
        penaltyText = x.penalty
    if (x.attachments)
        imageText = `<a href="./attachments.html" onclick="handleViewNotesAttachments('${x._id}')">View attachments</a>`
    let html = `
    <div id="${count}" class="displayed-div-css">
    <h1>Incident ${count}:</h1>
    <p><b>Students involved:</b> <table id="table${x._id}"></table></p>
    <p><b>Type of incident:</b> ${x.incidentType}</p>
    <p><b>Location:</b> ${x.locationOfIncident}</p>
     <p><b>Date:</b> ${x.dateOfIncident.substring(0, 10)}</p>
    <p><b>Time:</b> ${x.timeOfIncident}</p>
    <p><b>Teacher's remarks:</b> ${x.teacherRemark}</p>
    <p><b>Penalty: </b> <span style="color: red">${penaltyText}</span></p>
    <p><b>Notes: </b> ${noteText}</p>
    <p><b>Attachments: </b> ${imageText}</p>
    <input type="button" value="Update Incident" id="update-btn" onclick="handleUpdate('${x._id}')">
    <input type="button" value="Add Penalty" id="penalty-btn" onclick="handleAddPenalty('${x._id}','${x.penalty}')"><br>
    <div id="penaltyInputDiv${x._id}" style="display: none">
        <label for="penaltyInput" id="labelPenalty${x._id}">Add penalty</label> <br>
        <input type="text" id="penaltyInput${x._id}"> 
        <input type="button" value="Add" id="sumbitPenalty${x._id}" onclick="handlePenaltySubmit('${x._id}','${x.idStudent}')">
    </div>
    </div>
    `
    return html
}

async function displayInvolvedStudents(incidentId) {
    let incident = await studentRepo.getIncident(incidentId)
    let students = await Promise.all(incident.studentsId.map(async x => await studentRepo.getStudent(x)))
    let html = students.map(x => eachToHTML(x)).join('')
    let table = document.querySelector(`#table${incidentId}`)
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
            </tr>
        </thead>
        ${html}`
}

function eachToHTML(x) {
    return `
    <tr>
        <td>${x.idStudent}</td>
        <td>${x.firstName}</td>
        <td>${x.grade}</td>
    </tr>
    `
}

function handleViewNotesAttachments(incidentNumber) {
    let user = userRepo.getTheLoggedInAcc();
    localStorage.setItem('incidentId', `${incidentNumber}`);
    if (user.profession != 'parent') {
        localStorage.setItem('DDValue', `${viewSelection.value}`)
        localStorage.setItem('inputValue', `${input.value}`)
    } else {
        localStorage.setItem('parentDD', `${document.querySelector('#studentSelection').value}`)
    }
}


function handleUpdate(incidentId) {
    localStorage.setItem('DDValue', `${viewSelection.value}`)
    localStorage.setItem('inputValue', `${input.value}`)
    localStorage.setItem('incidentId', `${incidentId}`);
    localStorage.setItem('isEditUpdate', `${incidentId}`);
    window.location.href = './report-incident.html'
}


function handleAddPenalty(incidentId, penalty) {
    const penaltyInputDiv = document.querySelector(`#penaltyInputDiv${incidentId}`);
    const penaltyInputText = document.querySelector(`#penaltyInput${incidentId}`);
    const submitPenalty = document.querySelector(`#sumbitPenalty${incidentId}`);
    penaltyInputDiv.style.display = 'inline';
    if (penalty != 'undefined' && penalty != '') {
        document.querySelector(`#labelPenalty${incidentId}`).innerText = 'Update penalty'
        penaltyInputText.value = penalty
        submitPenalty.value = 'Update'
    }
}


async function handlePenaltySubmit(incidentId, id) {
    const penaltyInput = document.querySelector(`#penaltyInput${incidentId}`);
    let incident = await studentRepo.getIncident(incidentId)
    incident.penalty = penaltyInput.value
    await studentRepo.updateStudentIncident(incident, incidentId)
    if (localStorage.getItem('displayFromSummary') != 'no')
        await checkIfParent()
    await display();
}

function filterIncidentsByDate(incidents) {
    if (startDate.value > endDate.value || endDate.value < startDate.value)
        alert('Wrong input of dates');
    else if (startDate.value == '' || endDate.value == '')
        alert('Please choose a range');
    else
        return incidents.filter(x => (x.dateOfIncident >= startDate.value && x.dateOfIncident <= endDate.value))
}