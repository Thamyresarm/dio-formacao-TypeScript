import { IUser, UserService } from "./UserService";


describe('UserService', () => {
    const mockDb: IUser[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('Thamy', 'thamy@magalhaes.com');
        expect(mockConsole).toHaveBeenCalledWith("Db", mockDb)
    }) 

    it('Deve retornar true ao deletar o usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.deleteUser('Thamy');
        expect(mockConsole).toHaveBeenCalledWith(true)
    }) 
    
    it('Deve retornar false ao deletar o usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.deleteUser('Jorge');
        expect(mockConsole).toHaveBeenCalledWith(false)
    }) 
})