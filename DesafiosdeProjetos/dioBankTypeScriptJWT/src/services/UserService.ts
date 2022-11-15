import { sign } from "jsonwebtoken";
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
    
    getAutenticatedUser = (email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPassword(email, password)
    }

    getToken = async (email: string, password: string): Promise<string> => {
        const user = await this.getAutenticatedUser(email, password)

        if(!user) {
            throw new Error('Email ou senha inválida!')
        }

        const tokenData = {
            name: user?.name,
            email: user?.email
        }
        const tokenkey = '123456789'
        const tokenOption = {
            subject: user?.user_id
        }

        const token = sign(tokenData, tokenkey, tokenOption)

        return token
    }

}