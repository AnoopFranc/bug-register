import { User } from "../../model/user";

export interface IProjectMemberService {
    signIn(data: User): Promise<void>;
  }