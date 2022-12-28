import { User } from "../../model/user";

export interface IAuthService {
  signInByGmail(credential: string): Promise<User>;
  helloWorld(): string;
}
