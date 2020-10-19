import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from 'src/application/infrastructure/repository/users.repository.interface'
import { Users } from 'src/domain/users.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository implements UserRepositoryInterface {

    constructor(@InjectRepository(Users) private readonly usersEntityRepository: Repository<Users>) {}

    update(id: number, user : Users): Users {
        return user
    }

    findById(id: number): Users {
        const userDomain: Users = new Users();
        return userDomain
    }

    async findAll() : Promise<Users[]>{

        const foundUsersEntities: Users[] = await this.usersEntityRepository.find();

         return foundUsersEntities

    }
}


