import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {User} from "./User";
import {Parent} from "./Parent";
import {Section} from "../Section";

@Entity()
export class Child extends User {
  @Column("simple-array", {nullable: true})
  preferences: string[];

  @ManyToMany(() => Parent, parent => parent.children, {
    // cascade: ['update'],
  })
  parents: Parent[];

  @JoinTable()
  @ManyToMany(() => Section, section => section.children)
  sections: Section[];
}