import { User } from "../../model/user";
import { IRepository } from "../../utils/repository/IRepository";

export interface IUserRepository extends IRepository<User> {
  getUserByEmail(email: string): Promise<User>;
}
