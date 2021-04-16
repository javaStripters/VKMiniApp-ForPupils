import AbstractEntity from "../AbstractEntity";
import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User extends AbstractEntity {

  @PrimaryColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({nullable: true})
  patronymic: string;

  @Column()
  city!: string;

  @Column({nullable: true})
  phoneNumber: string;

  @Column({nullable: true})
  email: string;
}

export interface UserInput {
  id: number;
  firstName: string;
  lastName: string;
  patronymic?: string;
  city: string;
  phone_number?: string;
  email?: string;
}