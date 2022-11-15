import { UserController } from "./UserController"
import { Request } from "express"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { makeMockRequest } from "../__mocks__/mockRequest.mock"

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn()
}

const mockeUser = {
    user_id: '123',
    name: 'Thamyres',
    email: 'thamy@magalhaes.com',
    password: '123'
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {

    // const mockUserService: Partial<UserService> = {
    //     createUser: jest.fn(),
    //     getUser: jest.fn(),
    //     deleteUser: jest.fn()
    // }
    // const userController = new UserController(mockUserService as UserService)

    const userController = new UserController()
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Thamyres',
                email: 'thamy@magalhaes.com',
                password: '123'
            }
        } as Request

        const mockResponse = makeMockResponse()

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário Criado!' })
    })

    it('Deve retornar erro caso o usuário não preencha nome, email ou password', () => {
        const mockRequest = {
            body: {
                name: 'Thamyres',
                email: 'Teste@br.com',
                password: ''
            }
        } as Request

        const mockResponse = makeMockResponse()

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Todos os campos Obrigatórios' })
    })

    it('Deve retornar todos os usuários', async () => {
        mockUserService.getAllUsers = jest.fn().mockImplementation(() => Promise.resolve(
            [
                {
                    user_id: '123',
                    name: "Thamy",
                    email: "thamy@magalhaes.com",
                    password: "12345"
                },
                {
                    user_id: '1234',
                    name: "Thamyres",
                    email: "thamyssd@magalhaes.com",
                    password: "125"
                }
            ])
        )

        const mockRequest = makeMockRequest({})
        await userController.getAllUsers(mockRequest, mockResponse)
        expect(mockUserService.getAllUsers).toHaveBeenCalled
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject(
            [
                {
                    user_id: '123',
                    name: "Thamy",
                    email: "thamy@magalhaes.com",
                    password: "12345"
                },
                {
                    user_id: '1234',
                    name: "Thamyres",
                    email: "thamyssd@magalhaes.com",
                    password: "125"
                }
            ]
        )
    })

    it('Deve retornar o usuário com Id', async () => {
        const mockRequest = makeMockRequest({
            params: {
                id: '123'
            }
        })

        await userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('123')
        expect(mockResponse.state.status).toBe(200)
    })

    it('Deve retornar a mensagem usuário deletado com sucesso', async () => {
        mockUserService.deleteUser = jest.fn().mockImplementation(() => Promise.resolve(mockeUser))

        const mockRequest = makeMockRequest({
            params: {
                id: '123'
            }
        })

        await userController.deleteUser(mockRequest, mockResponse)
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(mockRequest.params.id)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: `Usuário ${mockRequest.params.id} Deletado com sucesso!` })
    })
})