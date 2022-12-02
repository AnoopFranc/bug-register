import { User } from "../../model/user";

export interface IProjectService {
    signIn(data: User): Promise<void>;
  }