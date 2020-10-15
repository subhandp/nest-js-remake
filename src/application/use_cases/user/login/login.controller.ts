import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/persistence/repository/user.repository'
import { LoginRequest } from 'src/application/use_cases/user/login/login.request'
import { LoginRequestMapper } from 'src/application/use_cases/user/login/login.request'

@Controller('/auth')
export class LoginController {
    constructor(private readonly userRepository: UserRepository) {}

    @Post('/login')
    login(@Body() loginRequest: LoginRequest): string {
        return this.userRepository.login(LoginRequestMapper(loginRequest));
    }
}