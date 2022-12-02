import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseUuidWithEditorEntity } from "../utils/entity/baseUuidWithEditorEnity";
import { BugColumn } from "./bugColumn";
@Entity()
export class BugRow extends BaseUuidWithEditorEntity {
  @ManyToOne((type) => BugColumn)
  @JoinColumn()
  Column!: BugColumn;

  @Column("text")
  ColumnTextValue: string;
}
