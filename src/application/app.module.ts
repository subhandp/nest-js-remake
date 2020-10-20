import { Module } from '@nestjs/common';
import { createModule } from './use_cases/address/crud/create.module';
import { LoginModule } from './use_cases/user/login/login.module';
import { databaseConfigService } from 'src/infrastructure/config/db.config'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    createModule,
    LoginModule,
    TypeOrmModule.forRoot(databaseConfigService.getTypeOrmConfig())
  ],
})
export class AppModule {}
