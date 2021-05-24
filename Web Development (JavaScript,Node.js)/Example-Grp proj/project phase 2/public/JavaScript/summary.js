const yearInput = document.querySelector('#annualYear');
const typeRadio = document.querySelector('#radioType');
const gradeRadio = document.querySelector('#radioGrade');
const sumbitBtn = document.querySelector('#submitBtn');
const gradeDiv = document.querySelector('#grade-div')
const gradeInput = document.querySelector('#gradeInput')
const table = document.querySelector('#table')
const incidentsDiv = document.querySelector('#display-incidents')

gradeRadio.addEventListener('click', handleGradeClick);
typeRadio.addEventListener('click', handleTypeClick);
sumbitBtn.addEventListener('click', handleSubmit)
document.addEventListener('DOMContentLoaded',async ()=>{
    let obj = JSON.parse(localStorage.getItem('infoFromSummary'))
    if(obj != null){
        yearInput.value = obj.yearInput
        gradeInput.value=obj.gradeValue;
        if(obj.radioType=='type'){
            typeRadio.checked = true
            await displayTypeIncidents()
        }
        else{
            gradeRadio.checked=true
            await displayGradeIncidents()
            gradeDiv.style.display='inline'
        }
    }
})

import Students from './Repositories/students-repo.js'

const studentRepo = new Students();


window.handleShowIncidents = handleShowIncidents

function handleGradeClick() {
    gradeDiv.style.display = "inline";
    table.innerHTML = ""
    incidentsDiv.innerHTML = ""
}

function handleTypeClick() {
    gradeDiv.style.display = "none";
    table.innerHTML = ""
    incidentsDiv.innerHTML = ""
}

async function handleSubmit() {
    incidentsDiv.innerHTML = ""
    if (yearInput.value == "" || (gradeRadio.checked == false && typeRadio.checked == false))
        alert('Please fill in the options')
    else if (gradeRadio.checked == true && gradeInput.value == "")
        alert('Please enter the grade year')
    else if ((gradeInput.value > 12 || gradeInput.value < 1) && gradeRadio.checked == true) {
        alert('Please enter a grade level value from 1-12')
    } else {
        if (typeRadio.checked == true) {
            await displayTypeIncidents();
        } else if (gradeRadio.checked == true) {
            await displayGradeIncidents()
        }
    }
}


async function displayTypeIncidents() {
    let statistics = await studentRepo.getStatistics(yearInput.value)
    if(statistics.length==0) {
        alert('No incidents found in that year!')
        return;
    }
    let abuseIndex = statistics.findIndex(x=> x._id=='abusing')
    let argueIndex = statistics.findIndex(x=> x._id=='arguing')
    let fightIndex = statistics.findIndex(x=> x._id=='fighting')
    let misbehaveIndex = statistics.findIndex(x=> x._id=='misbehave')
    let abuseCount = abuseIndex != -1 ? statistics[abuseIndex].total : 0;
    let argueCount = argueIndex!= -1 ? statistics[argueIndex].total : 0;
    let fightCount = fightIndex!= -1 ? statistics[fightIndex].total : 0;
    let misbehaveCount = misbehaveIndex != -1 ? statistics[misbehaveIndex].total : 0;
    let htmlDrillDetails = eachToHTMLForDrill(misbehaveCount, abuseCount, argueCount, fightCount)

    table.innerHTML = `
    <tr>
        <th>Incident type</th>
        <th>Count</th>
    </tr>${htmlDrillDetails}
    `
}

function eachToHTMLForDrill(misbehaveCount, abuseCount, argueCount, fightCount) {
    return `
    <tr>
        <td><a onclick="handleShowIncidents('abusing','${abuseCount}')">Abusing</a></td>
        <td>${abuseCount}</td>
    </tr>
    <tr>
        <td><a onclick="handleShowIncidents('arguing','${argueCount}')">Arguing</a></td>
        <td>${argueCount}</td>
    </tr>
    <tr>
        <td><a onclick="handleShowIncidents('fighting','${fightCount}')">Fighting</a></td>
        <td>${fightCount}</td>
    </tr>
    <tr>
        <td><a onclick="handleShowIncidents('misbehave','${misbehaveCount}')">Misbehaving</a></td>
        <td>${misbehaveCount}</td>
    </tr>
    `
}

async function handleShowIncidents(type, count) {
    if (count == 0) {
        alert('There are no incidents to show')
    }
    else {
        let radio=typeRadio.checked?'type':'grade';
        let gradeValue = radio=='grade'?gradeInput.value:-1
        let obj = {yearInput:yearInput.value, radioType:radio,gradeValue:gradeValue}
        localStorage.setItem('infoFromSummary',JSON.stringify(obj))
        localStorage.setItem('summaryType', `${type}`)
        localStorage.setItem('displayFromSummary','yes');
        window.location.href= "./get-incidents.html"
    }
}


async function displayGradeIncidents() {
    let incidentsOfGrade = await studentRepo.getIncidentsByGrade(gradeInput.value)
    let incidentsByYear = incidentsOfGrade.flat().filter(x => {
        let date = new Date(x.dateOfIncident);
        if (date.getFullYear() == yearInput.value)
            return x;
    })
    table.innerHTML = `
        <tr>
            <th>Incidents for grade level ${gradeInput.value} in year ${yearInput.value}</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>${incidentsByYear.length}</td>
            <td><a onclick="handleShowIncidents('','${incidentsByYear.length}')"> View</a></td>
        </tr>
    `
}

