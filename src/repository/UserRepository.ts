import { injectable } from "inversify";
import { IUserRepository } from "../interface/repository";
import { ProjectMember } from "../model/projectMember";
import { User } from "../model/user";

@injectable()
export class UserRepository implements IUserRepository {
  getUserByEmail(): Promise<User> {
    throw new Error("Method not implemented.");
  }
  Create(entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  Update(entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  GetById(Id: Object): Promise<User> {
    throw new Error("Method not implemented.");
  }
  GetAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  DeleteById(Id: Object): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
