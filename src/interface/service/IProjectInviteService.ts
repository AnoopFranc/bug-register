import { User } from "../../model/user";

export interface IProjectInviteService {
    signIn(data: User): Promise<void>;
  }