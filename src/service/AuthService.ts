import { inject, injectable } from "inversify";
import { TYPES } from "../core/type.core";
import { IUserRepository } from "../interface/repository";
import { IAuthService } from "../interface/service";
import { User } from "../model/user";

/**
 * The actual class that contains all the business logic related to users.
 * Controller sanitize/validate(basic) and sends data to this class methods.
 */
@injectable()
export class AuthService implements IAuthService {
  @inject(TYPES.UserRepository) private userRepository: IUserRepository;
  async signIn(data: User): Promise<User> {
    const user = await this.userRepository.getUserByEmail(data.Email);
    if (!user) {
      const user = await this.userRepository.Create(data);
      return user;
    }
    return user;
  }
  helloWorld(): string {
    return "Hello this is Anoop";
  }
}
