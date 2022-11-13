import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', ()=> ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {

    // const mockAlert = jest.fn()
    // window.alert = mockAlert
    const mockEmail = 'thamy@magalhaes.com'

    it('Deve retornar true caso o email seja válido', async () => {
        //Deve exibir um alert com boas vindas e o nome caso o email seja válido
        // await login(mockEmail)
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith(`/1`)
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve retornar falso caso o email seja inválido', async () => {
        // Deve exibir um erro caso o email seja inválido
        // await login('email@inválido.com')
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        // expect(mockNavigate).not.toHaveBeenCalledWith()
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})