import { Column } from "typeorm";
import { BaseLongKeyEntity } from "./baseLongKeyEntity";

export abstract class BaseLongKeyWithEditorEntity extends BaseLongKeyEntity {
  @Column({ type: "uuid", nullable: false })
  CreatedBy!: string;

  @Column({ type: "uuid", nullable: false })
  UpdatedBy!: string;
}
