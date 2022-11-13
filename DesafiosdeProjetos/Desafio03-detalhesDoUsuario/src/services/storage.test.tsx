import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('Deve alterar o valor do objeto no LocalStorage', () => {
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})