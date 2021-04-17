import AbstractEntity from "./AbstractEntity";
import {Column, Entity, JoinTable, ManyToMany, OneToMany} from "typeorm";
import {Child} from "./users/Child";
import Tutor from "./users/Tutor";
import Review from "./Review";

type WeekDay = "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота" | "Воскресенье";

type classTime = { weekday: WeekDay, from: [string, string], to: [string, string] };

@Entity()
export class Section extends AbstractEntity {

  @Column()
  tutorName!: string;

  @Column()
  organizationName!: string;

  @Column()
  description!: string;

  @Column()
  address!: string;

  @Column("simple-array")
  categories: string[];

  // TODO: Make not nullable after fix
  @Column("simple-json", {nullable: true})
  days!: classTime[];

  @Column("simple-array")
  links: string[];

  @Column({nullable: true})
  cover: string;

  @Column({nullable: true})
  paymentDetails: string;

  @ManyToMany(() => Child, child => child.sections)
  children: Child[];

  @JoinTable()
  @ManyToMany(() => Tutor, tutor => tutor.sections)
  tutors: Tutor[];

  @OneToMany(() => Review, review => review.section)
  reviews: Review[];
}

export interface SectionInput {
  tutorName: string;
  organizationName: string;
  description: string;
  address: string;
  daysRaw: string;
  categoriesRaw: string;
  linksRaw: string;
}
