const homeBtn = document.querySelector('#home-btn');
const reportBtn = document.querySelector('#report-btn-div');
const getIncidents = document.querySelector('#get-incident-btn-div');
const summaryBtn = document.querySelector('#summary-btn-div');
const embedTag = document.querySelector('#embed-site');
const logInLink = document.querySelector('#logInLink');
const logInName=document.querySelector("#nameOfLogin")

import UserRepo from "./Repositories/user-repo.js";
const userRepo = new UserRepo();

logInLink.addEventListener('click',handleSignOut)
document.addEventListener('DOMContentLoaded',checkLoggedIn);
homeBtn.addEventListener('click',()=>{
    document.querySelector('#mainPage').style.display="block";
    embedTag.src = ''
});
reportBtn.addEventListener('click',()=>{
    localStorage.setItem('isEditUpdate', `-1`);
    hideMain();
    embedTag.src = './report-incident.html'
});
getIncidents.addEventListener('click',()=> {
    localStorage.setItem('displayFromSummary','no')
    localStorage.setItem('incidentId', `-1`);
    localStorage.setItem('parentDD','-1')
    hideMain()
    embedTag.src = './get-incidents.html'
});
summaryBtn.addEventListener('click',()=>{
    localStorage.setItem('infoFromSummary',JSON.stringify(null))
    hideMain();
    embedTag.src = './summary-report.html'
});


function hideMain(){
    document.querySelector('#mainPage').style.display="none";
}


async function checkLoggedIn(){
    let acc =  await userRepo.getTheLoggedInAcc();

    if(acc !=undefined){
        let user=acc;
        logInName.innerText=user.userName;
        logInLink.innerText="Sign out";
        if(acc.profession == "parent"){
            reportBtn.style.display="none";
            getIncidents.style.display="inline";
            summaryBtn.style.display="none";
        }
    }
    else{
        reportBtn.style.display="none";
        getIncidents.style.display="none";
        summaryBtn.style.display="none";
    }
}

function handleSignOut(){
    userRepo.deleteLoggedInAccount();
}
