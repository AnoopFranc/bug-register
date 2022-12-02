import { Entity, Column } from "typeorm";
import { BaseUuidEntity } from "../utils/entity/baseUuidEntity";
@Entity()
export class User extends BaseUuidEntity {
  @Column("varchar", { nullable: false, length: 40 })
  Name!: string;

  @Column("varchar", { nullable: false, length: 40 })
  Email!: string;
}
