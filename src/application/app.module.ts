import { Module } from '@nestjs/common';
import { LoginModule } from './use_cases/user/login/login.module';

@Module({
  imports: [LoginModule],
})
export class AppModule {}
