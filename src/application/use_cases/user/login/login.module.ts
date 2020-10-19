import { Module } from '@nestjs/common'
import { LoginController } from '../login/login.controller'
import { AuthRepository } from 'src/infrastructure/persistence/repository/auth.repository'

@Module({
    controllers: [LoginController],
    providers: [AuthRepository],
})

export class LoginModule{}