import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'thamy@magalhaes.com'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda ${mockEmail}!`)
    })

    it('Não deve exibir um alert apenas com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })
})