import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository"

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository = new UserRepository(AppDataSource.manager)){
        this.userRepository = userRepository;
    }
    
    createUser = (name: string, email: string, password: string) => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user)
    }

    getAllUsers = async (): Promise<User[]> => {
        return await this.userRepository.getAllUsers()
    }

    getUser = async (id: string):Promise<User | null> => {
        return await this.userRepository.getUser(id)
    }

    deleteUser = async (id: string): Promise<boolean> => {
        return await this.userRepository.deleteUser(id)
    }

}