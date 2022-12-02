import { User } from "../../model/user";

export interface IBugService {
    signIn(data: User): Promise<void>;
  }