import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Users} from './users.domain'

@Entity()
export class Address{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adminId: number;

  @Column()
  userId: number;

  @Column()
  addressName: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column()
  address: string;

  @ManyToOne(() => Users, user => user.address)
  user : Users

}