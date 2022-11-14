import { EntityManager } from "typeorm"
import { User } from "../entities/User"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "./UserRepository"

jest.mock('../database', () => {
    initialize: jest.fn()
})

describe('UserRepository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockuser: User = {
        user_id: '123',
        name: 'THATA',
        email: "Thata@com",
        password: 'thata123'
    }

    beforeAll(async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockuser,
            findOneReturn: mockuser
        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('Deve criar um usuário no banco de dados', async () => {
        const response = await userRepository.createUser(mockuser)
        expect(managerMock.save).toHaveBeenCalled()
        expect(response).toMatchObject(mockuser)
    })

    // it('Deve retornar todos os usuarios do BD', async () => {
    //     await userRepository.getAllUsers()
    //     expect(managerMock.find).toHaveBeenCalled()
    // })
    
    // it('Deve retornar o usuario do BD com ID enviado', async () => {
    //     const response = await userRepository.getUser('123')
    //     expect(managerMock.findOne).toHaveBeenCalled()
    //     expect(response).toMatchObject(mockuser)
    // })

    // it('Deve retornar true ao deletar usuário', async () => {
    //     const response = await userRepository.deleteUser('123')
    //     expect(managerMock.remove).toHaveBeenCalled()
    //     expect(response).toBeTruthy
    // })
    
    it('Deve retornar falso ao deletar usuário', async () => {
        const response = await userRepository.deleteUser('456')
        expect(response).toBeFalsy
    })
})