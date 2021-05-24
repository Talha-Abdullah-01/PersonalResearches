import Students from './Repositories/students-repo.js'
import UserRepo from "./Repositories/user-repo.js";

const userRepo = new UserRepo();
const studentRepo = new Students();
let backBtn = document.querySelector('#backBtn');
let addInput = document.querySelector('#addNoteInput');
let submitNote = document.querySelector('#submitNewNote');
let incidentNumber;

window.removeNote = removeNote;


document.addEventListener('DOMContentLoaded', async () => {
    incidentNumber = localStorage.getItem('incidentId')
    document.querySelector('#title').innerText = `Notes for incident #${incidentNumber}`
    let incident = await studentRepo.getIncident(incidentNumber);
    let notes = incident.notes;
    displayNotes(notes)
})

submitNote.addEventListener('click', async () => {
    let incident = await studentRepo.getIncident(incidentNumber);
    if (addInput.value)
        incident.notes.push(addInput.value)
    else
        alert('Please put a note')
    addInput.value = ''
    await studentRepo.updateStudentIncident(incident, incidentNumber);
    displayNotes(incident.notes)
})


backBtn.addEventListener('click', () => {
    window.location.href = './get-incidents.html';
})

function displayNotes(notes) {
    if (notes.length == 0) {
        document.querySelector('#noteTable').innerHTML = `<h1>There are no notes for incident #${incidentNumber}</h1>`
    }else {
        let count = 1;
        let html = notes.map(x => eachToHTML(count++, x)).join('')
        document.querySelector('#noteTable').innerHTML = `
        <thead>
            <tr>
                <th>Number</th>
                <th>Note</th>
                <th id="action">Action</th>
            </tr>
        </thead>
        ${html}`
    }
    if (userRepo.getTheLoggedInAcc().profession == 'parent') {
        document.querySelector('#add-note-div').style.display = 'none';
        if (notes.length != 0) {
            document.querySelector('#action').style.display = 'none';
            let icons = document.querySelectorAll('#deleteIcon')
            for (let temp of icons)
                temp.style.display = 'none';
        }
    }
}

function eachToHTML(count, x) {
    return `
    <tr>
        <td>${count}</td>
        <td>${x}</td>
        <td> <i class="fa fa-trash" id="deleteIcon" onclick="removeNote('${count}')"></i></td>
    </tr>
    `
}

async function removeNote(count) {
    let incident = await studentRepo.getIncident(incidentNumber);
    incident.notes.splice(count - 1, 1);
    await studentRepo.updateStudentIncident(incident, incidentNumber);
    displayNotes(incident.notes)
}