import { Injectable } from '@nestjs/common';
import { Auth } from 'src/domain/auth.domain';
import { UserRepositoryInterface } from 'src/application/infrastructure/repository/user.repository.interface'

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    login(auth: Auth): string {
        return "Login success";
    }
}