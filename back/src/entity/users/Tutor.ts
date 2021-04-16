import {Column, Entity, ManyToMany} from "typeorm";
import {User} from "./User";
import {Section} from "../Section";

@Entity()
export default class Tutor extends User {

  @Column()
  organizationName!: string;

  @Column("simple-array")
  sectionsTypes: string[];

  @ManyToMany(() => Section, section => section.tutors)
  sections: Section[];
}