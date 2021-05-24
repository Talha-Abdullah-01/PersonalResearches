import Students from './Repositories/students-repo.js'
const studentRepo = new Students();
import UserRepo from "./Repositories/user-repo.js";
const userRepo = new UserRepo();

let backBtn = document.querySelector('#backBtn');

window.removeAttachment = removeAttachment;
window.handleSubmit = handleSubmit;

backBtn.addEventListener('click',()=>{
    window.location.href='./get-incidents.html';
})
let incidentNumber;
document.addEventListener('DOMContentLoaded',async ()=>{
    incidentNumber = localStorage.getItem('incidentId')
    document.querySelector('#title').innerText = `Attachments for incident #${incidentNumber}`
    let incident = await studentRepo.getIncident(incidentNumber);
    displayAttachments(incident.attachments)
})

function displayAttachments(attachments){
    if(attachments.length ==0) {
        document.querySelector('#attachmentTable').innerHTML = `<h1>There are no attachments for incident #${incidentNumber}</h1>`
    }else {
        let count = 1;
        let html = attachments.map(x => eachToHTML(count++, x)).join('')
        document.querySelector('#attachmentTable').innerHTML = `
        <thead>
            <tr>
                <th>Number</th>
                <th>Attachment</th>
                <th id="action">Action</th>
            </tr>
        </thead>
        ${html}`
    }
    if(userRepo.getTheLoggedInAcc().profession=='parent') {
        document.querySelector('#form').style.display='none';
        if(attachments.length !=0) {
            document.querySelector('#action').style.display = 'none';
            let icons = document.querySelectorAll('#deleteIcon')
            for (let temp of icons)
                temp.style.display = 'none';
        }
    }

}

function eachToHTML(count,x) {
    return `
    <tr>
        <td>${count}</td>
        <td>${x}</td>
        <td> <i class="fa fa-trash" id="deleteIcon" onclick="removeAttachment('${count}')"></i></td>
    </tr>
    `
}
async function removeAttachment(count){
    let incident = await studentRepo.getIncident(incidentNumber);
    incident.attachments.splice(count-1, 1);
    await studentRepo.updateStudentIncident(incident,incidentNumber);
    displayAttachments(incident.attachments)
}

async function handleSubmit(){
    document.querySelector('#form').action=`api/students/attachments/${incidentNumber}`
    alert('Attachments added!')
    setTimeout(function(){window.location.href='./attachments.html';},1000);
}
