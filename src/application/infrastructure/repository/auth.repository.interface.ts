import { Auth } from '../../../domain/auth.domain'
import { Users } from '../../../domain/users.domain'

export interface AuthRepositoryInterface {
    login(auth: Auth): string
    Register(user: Users) : Users 
}