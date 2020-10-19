import { Address } from '../../../domain/address.domain'

export interface UpdateRepositoryInterface {
    update(id: number): Address
    findById(id: number): Address
    findAll(): Address
    create(): Address
    delete(id: number) : string
}