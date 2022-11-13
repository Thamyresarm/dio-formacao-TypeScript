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
    const mockPassword = '123'

    it('Deve retornar true caso o email e a senha sejam válidos', async () => {
        //Deve exibir um alert com boas vindas e o nome caso o email seja válido
        // await login(mockEmail)
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith(`/1`)
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve retornar falso caso o email ou a senha sejam inválidos', async () => {
        // Deve exibir um erro caso o email seja inválido
        // await login('email@inválido.com')
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        // expect(mockNavigate).not.toHaveBeenCalledWith()
        const senha = await login(mockEmail,'456')
        expect(senha).toBeFalsy()
        const email = await login('invalido@teste.com',mockPassword)
        expect(email).toBeFalsy()
        const emailSenha = await login('invalido@teste.com','456')
        expect(emailSenha).toBeFalsy()
    })
})