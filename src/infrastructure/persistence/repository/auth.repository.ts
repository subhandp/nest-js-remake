import { Injectable } from '@nestjs/common';
import { Auth } from 'src/domain/auth.domain';
import { AuthRepositoryInterface } from 'src/application/infrastructure/repository/auth.repository.interface'
import { Users } from 'src/domain/users.domain';

@Injectable()
export class AuthRepository implements AuthRepositoryInterface {
    login(auth: Auth): string {
        return "Login success yee";
    }

    Register(users : Users) : Users {
        return this.toAuthdomain(users)
    }

    private toAuthdomain(user: Users): Users {
        const userDomain: Users = new Users();
    
        userDomain.username = user.username;
        userDomain.username = user.password;
    
        return userDomain;
      }
}