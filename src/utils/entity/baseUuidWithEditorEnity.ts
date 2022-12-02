import { Column } from "typeorm";
import { BaseUuidEntity } from "./baseUuidEntity";

export abstract class BaseUuidWithEditorEntity extends BaseUuidEntity {
  @Column({ type: "uuid", nullable: false })
  CreatedBy!: string;

  @Column({ type: "uuid", nullable: false })
  UpdatedBy!: string;
}
