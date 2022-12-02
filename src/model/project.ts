import { Entity, Column, OneToMany } from "typeorm";
import { BaseUuidEntity } from "../utils/entity/baseUuidEntity";
import { Bug } from "./bug";
@Entity()
export class Project extends BaseUuidEntity {
  @Column("varchar", { nullable: false, length: 32 })
  ProjectName!: string;

  @Column({ type: "bool" })
  IsArchived: boolean;

  @Column("boolean")
  IsPrivate: boolean;

  @OneToMany((type) => Bug, (Bug) => Bug.Id)
  Bugs: Bug[];
}
