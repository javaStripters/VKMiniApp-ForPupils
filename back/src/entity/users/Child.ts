import {Column, Entity, ManyToMany} from "typeorm";
import {User} from "./User";
import {Parent} from "./Parent";

@Entity()
export class Child extends User {
  @Column("simple-array", {nullable: true})
  preferences: string[];

  @ManyToMany(() => Parent, parent => parent.children, {
    // cascade: ['update'],
  })
  parents: Parent[];
}