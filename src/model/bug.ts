import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { BaseLongKeyWithEditorEntity } from "../utils/entity/baseLongKeyWithEditorEntity";
import { BugColumn } from "./bugColumn";
import { Project } from "./project";
@Entity()
export class Bug extends BaseLongKeyWithEditorEntity {
  @Column("varchar", { nullable: false, length: 16 })
  BugCode!: string;

  @Column({ type: "bool" })
  isDeleted: boolean;

  @ManyToOne((type) => Project, (Project) => Project.Id)
  @JoinColumn()
  Project: Project;

  @OneToMany((type) => BugColumn, (BugColumn) => BugColumn.Id)
  BugColumns: BugColumn[];
}
