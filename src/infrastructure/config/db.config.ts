// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Auth } from 'src/domain/auth.domain'
import { Users } from 'src/domain/users.domain'
import { Address } from 'src/domain/address.domain'



require('dotenv').config();

class DatabaseConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      // throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',

      host: this.getValue('DATABASE_HOST'),
      port: parseInt(this.getValue('DATABASE_PORT')),
      username: this.getValue('DATABASE_USER'),
      password: this.getValue('DATABASE_PASSWORD'),
      database: this.getValue('DATABASE_NAME'),
      // domain as entity
      entities: [Auth, Users, Address],

      migrationsTableName: 'typeorm_migrations',

      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/infrastructure/persistence/migration',
      },

      ssl: this.isProduction(),
    };
  }

}

const databaseConfigService = new DatabaseConfigService(process.env)
  .ensureValues([
    'DATABASE_HOST',
    'DATABASE_PORT',
    'DATABASE_USER',
    'DATABASE_PASSWORD',
    'DATABASE_NAME'
  ]);

export { databaseConfigService };