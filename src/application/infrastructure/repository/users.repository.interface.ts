import { Users } from '../../../domain/users.domain'

export interface UserRepositoryInterface {
    update(id: number, user : Users): Users
    findById(id: number): Users
    findAll(): Promise<Users[]>
}