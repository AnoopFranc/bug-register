import { User } from "../../model/user";

export interface IBugRowService {
    signIn(data: User): Promise<void>;
  }