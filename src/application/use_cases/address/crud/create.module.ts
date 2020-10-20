import { Module } from '@nestjs/common'
import { CreateController } from './create.controller'
import { AddressRepository } from 'src/infrastructure/persistence/repository/address.repository'
import { Address } from 'src/domain/address.domain';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    // imports: [TypeOrmModule.forFeature([Address])],
    controllers: [CreateController],
    providers: [AddressRepository],
})

export class createModule{}