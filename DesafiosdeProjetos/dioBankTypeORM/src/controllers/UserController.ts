import {  Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService;

    constructor(userService = new UserService){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if(!user.name || !user.email || !user.password){
            return response.status(400).json({message: 'Todos os campos Obrigatórios'})
        }

        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({ message: 'Usuário Criado!' })
    }

    getUser = async (request: Request, response: Response) => {
        const id = request.query.user_id

        if(typeof(id) === 'string') {
            const user = await this.userService.getUser(id)

            if(user !== null){
                return response.status(200).json(user)
            } 

            return response.status(200).json({message: 'Nenhum Usuário encontrado!'})
        }

        return response.status(400).json({message: 'Digite um id válido'})

    }

    getAllUsers = async (request: Request, response: Response) => {
        const users = await this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = async (request: Request, response: Response) => {
        const id = request.query.user_id

        if(typeof(id) === 'string') {
            const status = await this.userService.deleteUser(id)  

            if (status){
                return response.status(200).json({message: `Usuário ${id} Deletado com sucesso!`})
            } 
            
            return response.status(400).json({message: `Problemas ao Deletar usuário ${id}!`})

        } else {
            return response.status(400).json({message: 'Digite um id válido'})
        }
        
    }
}