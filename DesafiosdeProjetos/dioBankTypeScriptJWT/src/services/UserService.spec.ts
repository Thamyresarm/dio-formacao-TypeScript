import { UserService } from "./UserService";
import * as jwt from 'jsonwebtoken'

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
    const userService = new UserService(mockUserRepository);
    const mockUser = {
        user_id: '123',
        name: "Thamy",
        email: "thamy@magalhaes.com",
        password: "12345"
    }

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('Thamy', 'thamy@magalhaes.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })

    it('Deve retornar todos os usuarios', async () => {
        mockUserRepository.getAllUsers = jest.fn().mockImplementation(() => Promise.resolve(
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
        const response = await userService.getAllUsers();
        expect(mockUserRepository.getAllUsers).toHaveBeenCalled()
        expect(response).toMatchObject(
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

    it('Deve retornar um usuario pelo ID', async () => {
        mockUserRepository.getUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.getUser('123');
        expect(mockUserRepository.getUser).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })

    it('Deve retornar true ao deletar o usuario', async () => {
        mockUserRepository.deleteUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.deleteUser('123');
        expect(mockUserRepository.deleteUser).toHaveBeenCalled()
        expect(response).toBeTruthy
    })

    it('Deve retornar false ao deletar o usuario', async () => {
        mockUserRepository.deleteUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.deleteUser('456');
        expect(mockUserRepository.deleteUser).toHaveBeenCalled()
        expect(response).toBeFalsy
    })

    it('Deve retornar um token de usuário', async () => {
        jest.spyOn(userService,'getAutenticatedUser').mockImplementation(() => Promise.resolve(mockUser) )
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('thamy@magalhaes.com', '12345')
        expect(token).toBe('token')
    })

    it('Deve retornar um erro caso nao encontre email ou senha', async () =>{
        jest.spyOn(userService, 'getAutenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('sfdsdfdfs', '1255')).rejects.toThrowError(new Error('Email ou senha inválida!'))
    })
})