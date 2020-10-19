import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthRepository } from 'src/infrastructure/persistence/repository/auth.repository'
import { LoginRequest } from 'src/application/use_cases/user/login/login.request'
import { LoginRequestMapper } from 'src/application/use_cases/user/login/login.request'

@Controller('/auth')
export class LoginController {
    constructor(private readonly authRepository: AuthRepository) {}

    @Post('/login')
    login(@Body() loginRequest: LoginRequest): string {
        return this.authRepository.login(LoginRequestMapper(loginRequest));
    }
}