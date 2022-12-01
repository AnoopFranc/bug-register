import { User } from "../../model/user";

export interface IBugColumnService {
    signIn(data: User): Promise<void>;
  }