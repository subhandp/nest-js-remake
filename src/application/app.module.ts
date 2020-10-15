import { Module } from '@nestjs/common';
import { LoginModule } from './use_cases/user/login/login.module';
import { configService } from 'src/infrastructure/config/config'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
})
export class AppModule {}
