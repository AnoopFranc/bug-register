import { Entity, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { BaseUuidEntity } from "../utils/entity/baseUuidEntity";
import { Bug } from "./bug";
import { User } from "./user";
@Entity()
export class Project extends BaseUuidEntity {
  @Column("varchar", { nullable: false, length: 32 })
  ProjectName!: string;

  @Column({ type: "bool" })
  IsArchived: boolean;

  @Column("boolean")
  IsPrivate: boolean;

  @ManyToMany((type) => User)
  @JoinTable({
    name: "ProjectMember", // table name for the junction table of this relation
    joinColumn: {
      name: "user",
      referencedColumnName: "Id",
    },
    inverseJoinColumn: {
      name: "project",
      referencedColumnName: "Id",
    },
  })
  Members: User[];

  @OneToMany((type) => Bug, (Bug) => Bug.Id)
  Bugs: Bug[];
}
