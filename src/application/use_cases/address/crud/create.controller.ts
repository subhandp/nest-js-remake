import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AddressRepository } from 'src/infrastructure/persistence/repository/address.repository'
import { CreateRequestMapper } from 'src/application/use_cases/address/crud/create.request'
import { CreateRequest } from 'src/application/use_cases/address/crud/create.request'
import {  Address } from 'src/domain/address.domain'

@Controller('/address')
export class CreateController {
    constructor(private readonly adressRepository: AddressRepository) {}

    @Post('/')
    create(@Body() createRequest: CreateRequest): Promise<Address> {
        return this.adressRepository.create(CreateRequestMapper(createRequest));
    }
}