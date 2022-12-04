import { User } from "../../model/user";

export interface IAuthService {
  signIn(data: User): Promise<User>;
  helloWorld(): string;
}
