import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {User} from "./User";

@Entity()
export default class Tutor extends User {

  @Column()
  organizationName!: string;

  @Column()
  address!: string;

  @Column("simple-array")
  sectionsTypes: string[]
}