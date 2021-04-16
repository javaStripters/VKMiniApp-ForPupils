import {Column, Entity, JoinTable, ManyToMany, OneToMany} from "typeorm";
import {User} from "./User";
import {Child} from "./Child";
import {Section} from "../Section";
import Review from "../Review";

@Entity()
export class Parent extends User {
  @Column("simple-array", {nullable: true})
  preferences: string[];

  @JoinTable()
  @ManyToMany(() => Child, child => child.parents)
  children: Child[];

  @ManyToMany(() => Section, section => section.children)
  sections: Section[];

  @OneToMany(() => Review, review => review.reviewer)
  reviews: Review[];
}