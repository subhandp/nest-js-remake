import { Address } from "src/domain/address.domain";

export interface CreateRequest {
    addressName: string;
    city: string;
    zipcode: string;
    address: string;
}

export function CreateRequestMapper(addressRequest: CreateRequest): Address {
    const address: Address = {
        addressName: addressRequest.addressName,
        city: addressRequest.city,
        zipcode: addressRequest.zipcode,
        address: addressRequest.address,
    }

    return address
}

