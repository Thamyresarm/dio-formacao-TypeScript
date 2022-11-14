import { UserController } from "./UserController"
import { IUser, UserService } from "../services/UserService"
import { Request } from "express"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { makeMockRequest } from "../__mocks__/mockRequest.mock"

describe('UserController' , () => {
    const mockDb: IUser[] = []
    const mockUserService = new UserService(mockDb);
    
    // const mockUserService: Partial<UserService> = {
    //     createUser: jest.fn(),
    //     getAllUsers: jest.fn(),
    //     deleteUser: jest.fn()
    // }
    // const userController = new UserController(mockUserService as UserService)

    const userController = new UserController(mockUserService)
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Thamyres',
                email: 'thamy@magalhaes.com'
            }
        } as Request

        const mockResponse = makeMockResponse()

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário Criado!'})
    })

    it('Deve retornar erro caso o usuário não preencha nome ou email', () => {
        const mockRequest = {
            body: {
                name: 'Thamyres',
                email: ''
            }
        } as Request

        const mockResponse = makeMockResponse()

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message: 'Nome e Email Obrigatórios'})
    })

    it('Deve retornar a lista de usuários', () => {
        const mockRequest = makeMockRequest({})
        userController.getAllUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
    })

    it('Deve retornar a mensagem de usuário deletado', () => {
        const mockRequest = {
            body: {
                name: 'Thamyres',
                email: 'thamy@magalhaes.com'
            }
        } as Request

        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({message: `Usuário ${mockRequest.body.name} Deletado com sucesso!`})
    })

    it('Deve retornar a mensagem de problema ao deletar usuário', () => {
        const mockRequest = {
            body: {
                name: 'Thamys',
                email: 'thamy@magalhaes.com'
            }
        } as Request

        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message: `Problemas ao Deletar usuário ${mockRequest.body.name}!`})
    })
})