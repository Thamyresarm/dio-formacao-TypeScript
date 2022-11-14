import { Request, response, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService;

    constructor(userService = new UserService){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if(!user.name || !user.email){
            return response.status(400).json({message: 'Nome e Email Obrigatórios'})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário Criado!' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body
        const status = this.userService.deleteUser(user.name)  
        
        if (status){
            console.log(status)
            return response.status(200).json({message: `Usuário ${user.name} Deletado com sucesso!`})
        } else {
            console.log(status)
            return response.status(400).json({message: `Problemas ao Deletar usuário ${user.name}!`})
        }
    }
}