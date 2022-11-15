import { Request } from "express"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { LoginController } from "./LoginController"

const mockUserService = {
    getToken: jest.fn(),
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('LoginController', () => {
    
    const loginController = new LoginController()
     
    it('Deve retornar o token', async () => {
        const mockRequest = {
            body: {
                email: 'thamy@magalhaes.com',
                password: '123'
            }
        } as Request

        const mockResponse = makeMockResponse()

        await loginController.login(mockRequest, mockResponse)
        expect(mockUserService.getToken).toHaveBeenCalledWith(mockRequest.body.email, mockRequest.body.password)
        expect(mockResponse.state.status).toBe(200)
    })

    it('Deve retornar todos os campos obrigatorios', async () => {
        const mockRequest = {
            body: {
                email: 'thamy@magalhaes.com',
                password: ''
            }
        } as Request

        const mockResponse = makeMockResponse()

        await loginController.login(mockRequest, mockResponse)        
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message: 'Todos os campos Obrigatórios'})
    })
})