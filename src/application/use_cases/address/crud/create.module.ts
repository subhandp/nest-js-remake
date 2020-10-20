import { Module } from '@nestjs/common'
import { CreateController } from './create.controller'
import { AddressRepository } from 'src/infrastructure/persistence/repository/address.repository'

@Module({
    controllers: [CreateController],
    providers: [AddressRepository],
})

export class createModule{}