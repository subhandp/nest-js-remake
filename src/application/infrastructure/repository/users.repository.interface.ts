import { Users } from '../../../domain/users.domain'

export interface UserRepositoryInterface {
    update(id: number): Users
    getById(id: number): Users
}