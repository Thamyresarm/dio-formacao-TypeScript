import { EntityManager } from "typeorm";
import { User } from "../entities/User";

export class UserRepository {
    private manager: EntityManager

    constructor(manager: EntityManager) {
        this.manager = manager;
    }

    createUser = async (user: User): Promise<User> => {
        return this.manager.save(user)
    }

    getAllUsers = async (): Promise<User[]> => {
        return await this.manager.find(User)
    }

    getUser = async (userId: string): Promise<User | null> => {
        return await this.manager.findOne(User, {
            where: {
                user_id: userId
            }
        })
    }

    getUserByEmailAndPassword = async (email: string, password: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                email,
                password
            }
        })
    }

    deleteUser = async (userId: string): Promise<boolean> => {
        const user = await this.getUser(userId)
        if(user) {
            this.manager.remove(user)
            return true
        }
        return false
    }

}