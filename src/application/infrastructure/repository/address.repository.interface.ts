import { Address } from '../../../domain/address.domain'

export interface AddressRepositoryInterface {
    // update(id: number): Address
    // findById(id: number): Address
    // findAll(): Address
    create(address : Address): Promise<string>
    // delete(id: number) : string
}

