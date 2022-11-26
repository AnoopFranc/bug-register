import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

export abstract class BaseLongKeyEntity {
  @PrimaryGeneratedColumn("increment")
  Id!: number;

  @CreateDateColumn({ type: "timestamp" })
  CreatedAt: Timestamp;

  @UpdateDateColumn({ type: "timestamp" })
  UpdatedAt: Timestamp;
}
