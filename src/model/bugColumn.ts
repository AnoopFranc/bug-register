import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { BaseUuidWithEditorEntity } from "../utils/entity/baseUuidWithEditorEnity";
import { Bug } from "./bug";
import { BugRow } from "./bugRow";
@Entity()
export class BugColumn extends BaseUuidWithEditorEntity {
  @ManyToOne((type) => Bug, (Bug) => Bug.Id)
  @JoinColumn()
  Bug!: Bug;

  @Column("varchar", { nullable: false, length: 60 })
  ColumnName!: string;

  @Column({ type: "int" })
  Position: number;

  @OneToMany((type) => BugRow, (BugRow) => BugRow.Id)
  Rows: BugRow[];
}
