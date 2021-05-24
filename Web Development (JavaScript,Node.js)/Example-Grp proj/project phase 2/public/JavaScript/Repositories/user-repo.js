export default class UserRepo {

    async getUserName(userNameWanted){
        let url = `/api/usernames/${userNameWanted}`
        const response = await fetch(url)
        const username = await response.json()
        return username
    }

    addLoggedInAcc(object){
        localStorage.setItem('loggedInAccount',JSON.stringify(object));
    }

    getTheLoggedInAcc(){//There is only one object in this
        return  JSON.parse(localStorage.getItem('loggedInAccount'))
    }

    deleteLoggedInAccount(){
        localStorage.removeItem('loggedInAccount')
    }
}