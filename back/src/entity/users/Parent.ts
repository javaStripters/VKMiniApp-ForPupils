import {Column, Entity, JoinTable, ManyToMany, OneToMany} from "typeorm";
import {User} from "./User";
import {Child} from "./Child";

@Entity()
export class Parent extends User {
  @Column("simple-array", {nullable: true})
  preferences: string[];

  @JoinTable()
  @ManyToMany(() => Child, child => child.parents)
  children: Child[];
}