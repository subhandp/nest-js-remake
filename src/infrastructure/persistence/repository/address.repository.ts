import { Injectable } from '@nestjs/common';
import { AddressRepositoryInterface } from 'src/application/infrastructure/repository/address.repository.interface'
import { Address } from 'src/domain/address.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository} from "typeorm";

@Injectable()
export class AddressRepository implements AddressRepositoryInterface {

    // constructor(@InjectRepository(Address) private readonly addressEntityRepository: Repository<Address>) {}

    async create(address : Address): Promise<string> {
        // const addressENtity: Address =  await this.addressEntityRepository.save(address);
        
        await getRepository(Address)
        .createQueryBuilder()
        .insert()
        .into(Address)
        .values(address)
        .execute()

        return 'success create address'
    }



}


