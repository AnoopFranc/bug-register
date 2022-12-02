import { User } from "../../model/user";

export interface IUserService {
    signIn(data: User): Promise<void>;
  }