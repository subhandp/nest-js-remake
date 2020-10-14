import { Auth } from '../../../domain/auth.domain'

export interface UserRepositoryInterface {
    login(auth: Auth): string
}