import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseLongKeyEntity } from "../utils/entity/baseLongKeyEntity";
import { Project } from "./project";
import { User } from "./user";
@Entity()
export class ProjectMember extends BaseLongKeyEntity {
  @ManyToOne((type) => Project, (Project) => Project.Id)
  @JoinColumn()
  ProjectId!: Project;

  @ManyToOne((type) => User, (User) => User.Id)
  @JoinColumn()
  UserId!: User;

  @Column("boolean")
  IsAdmin: boolean;

  @Column("boolean")
  IsActive: boolean;
}
