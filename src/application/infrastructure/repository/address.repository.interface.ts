import { Address } from '../../../domain/address.domain'

export interface AddressRepositoryInterface {
    // update(id: number): Address
    // findById(id: number): Address
    // findAll(): Address
    create(address : Address): Promise<Address>
    // delete(id: number) : string
}

