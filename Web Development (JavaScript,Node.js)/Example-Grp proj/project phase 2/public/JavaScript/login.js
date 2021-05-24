import UserRepo from './Repositories/user-repo.js'

const userRepo = new UserRepo();
const enteredUserName = document.querySelector('#fUserName2');
const enteredPassword = document.querySelector('#fPassword');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', handleSubmit)


async function handleSubmit(event) {
    try {
        event.preventDefault()
        const userNameFromDB = await userRepo.getUserName(enteredUserName.value)
        if (userNameFromDB == undefined) {
            alert('Incorrect user name')
        } else if (enteredUserName.value != userNameFromDB.userName || enteredPassword.value != userNameFromDB.password) {
            alert('Incorrect user name or password')
        } else if (enteredUserName.value == userNameFromDB.userName && enteredPassword.value == userNameFromDB.password) {
            userRepo.addLoggedInAcc(userNameFromDB)
            window.location.href = "./index.html";
        }
    } catch (e) {
        alert('Incorrect user name')
    }

}