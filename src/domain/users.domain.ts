import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert,  OneToMany, JoinColumn } from 'typeorm';
import * as crypto from 'crypto';

import { Address } from './address.domain'
 
@Entity()
export class Users{
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'firstName', type: "varchar", length: 100, nullable: false })
  firstName: string;

  @Column({ name: 'lastName', type: "varchar", length: 100, nullable: false })
  lastName: string;

  @Column({ name: 'email', type: "varchar", length: 100, nullable: false })
  email: string;

  @Column({ name: 'phoneNumber', type: "varchar", length: 50, nullable: false })
  phoneNumber: string

  @Column({ name: 'username', type: "varchar", length: 100, nullable: false })
  username: string

  @Column({ name: 'salt', default: '*' })
  salt: string

  @Column({ name: 'type', default: 'user' })
  type: string

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  password: string;

  @OneToMany(() => Address, address => address.user)
  @JoinColumn({ name : 'address_id' })
  address : Address[]
}