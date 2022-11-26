import { Entity, Column, OneToMany, ManyToMany } from "typeorm";
import { BaseUuidEntity } from "../utils/entity/baseUuidEntity";
import { Project } from "./project";
@Entity()
export class User extends BaseUuidEntity {
  @Column("varchar", { nullable: false, length: 40 })
  Name!: string;

  @Column("varchar", { nullable: false, length: 40 })
  Email!: string;

  @ManyToMany((type) => Project, (Project) => Project.Id)
  Projects: Project[];
}
