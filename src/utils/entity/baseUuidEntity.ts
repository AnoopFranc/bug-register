import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

export abstract class BaseUuidEntity {
  @PrimaryGeneratedColumn("uuid")
  Id!: string;

  @CreateDateColumn({ type: "timestamp" })
  CreatedAt: Timestamp;

  @UpdateDateColumn({ type: "timestamp" })
  UpdatedAt: Timestamp;
}
