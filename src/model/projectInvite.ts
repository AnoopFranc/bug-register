import { Entity, Column, Timestamp, ManyToOne, JoinColumn } from "typeorm";
import { BaseUuidEntity } from "../utils/entity/baseUuidEntity";
import { Project } from "./project";
import { User } from "./user";
@Entity()
export class ProjectInvite extends BaseUuidEntity {
  @ManyToOne((type) => Project, (Project) => Project.Id)
  @JoinColumn()
  ProjectId!: Project;

  @ManyToOne((type) => User, (User) => User.Id)
  @JoinColumn()
  CreatedBy!: User;

  @Column("timestamp")
  expiry: Timestamp;
}
