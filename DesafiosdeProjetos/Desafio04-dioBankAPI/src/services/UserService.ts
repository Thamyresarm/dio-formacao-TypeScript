export interface IUser {
    name: string
    email: string    
}

const db = [
    {
        name: 'Thamyres Magalhães',
        email: 'thamy@magalhaes.com'
    }
]

export class UserService {
    dbtest: IUser []

    constructor (database = db) {
        this.dbtest = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        this.dbtest.push(user)
        console.log("Db", this.dbtest)
    }

    getAllUsers = () => {
        console.log(this.dbtest)
        return this.dbtest
    }

    deleteUser = (name: string) => {
        const user = this.dbtest.find((item) => item.name === name)
        if(user){
            const index = this.dbtest.indexOf(user)
            db.splice(index, 1)
            console.log(true)
            return true
        } else {
            console.log(false)
            return false
        }
    }
}