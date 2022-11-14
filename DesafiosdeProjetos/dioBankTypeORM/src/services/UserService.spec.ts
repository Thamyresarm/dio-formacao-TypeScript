import { UserService } from "./UserService";

jest.mock('../repositories/UserRepository')

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
    const userService = new UserService(mockUserRepository);

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '123',
            name: "Thamy",
            email: "thamy@magalhaes.com",
            password: "12345"
        }))
        const response = await userService.createUser('Thamy', 'thamy@magalhaes.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            user_id: '123',
            name: "Thamy",
            email: "thamy@magalhaes.com",
            password: "12345"
        })
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
        mockUserRepository.getUser = jest.fn().mockImplementation(() => Promise.resolve(
            {
                user_id: '123',
                name: "Thamy",
                email: "thamy@magalhaes.com",
                password: "12345"
            }
        ))
        const response = await userService.getUser('123');
        expect(mockUserRepository.getUser).toHaveBeenCalled()
        expect(response).toMatchObject(
            {
                user_id: '123',
                name: "Thamy",
                email: "thamy@magalhaes.com",
                password: "12345"
            })
    })

    it('Deve retornar true ao deletar o usuario', async () => {
        mockUserRepository.deleteUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '123',
            name: "Thamy",
            email: "thamy@magalhaes.com",
            password: "12345"
        }))
        const response = await userService.deleteUser('123');
        expect(mockUserRepository.deleteUser).toHaveBeenCalled()
        expect(response).toBeTruthy
    })

    it('Deve retornar false ao deletar o usuario', async () => {
        mockUserRepository.deleteUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '123',
            name: "Thamy",
            email: "thamy@magalhaes.com",
            password: "12345"
        }))
        const response = await userService.deleteUser('456');
        expect(mockUserRepository.deleteUser).toHaveBeenCalled()
        expect(response).toBeFalsy
    })
})