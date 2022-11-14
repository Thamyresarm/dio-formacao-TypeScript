import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dados = {
    email: "",
    password: ""
}
describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    
    it('Deve retornar o objeto no localStorage com a chave dados', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('dados')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dados', JSON.stringify(dados))
    })

    it('Deve alterar o valor do objeto no LocalStorage', () => {
        changeLocalStorage(dados)
        expect(mockSetItem).toHaveBeenCalledWith('dados', JSON.stringify(dados))
    })
})