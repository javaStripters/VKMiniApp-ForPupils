import AbstractEntity from "./AbstractEntity";
import {Column, Entity, ManyToOne} from "typeorm";
import {Section} from "./Section";
import {Parent} from "./users/Parent";

@Entity()
export default class Review extends AbstractEntity {
  @Column()
  rate: number;

  @Column()
  text: number;

  @ManyToOne(() => Section, section => section.reviews)
  section: Section;

  @Column()
  reviewerId: number;

  @ManyToOne(() => Parent, parent => parent.reviews)
  reviewer: Parent;
}