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
    signIn(data: User): Promise<void> {
       throw new Error("Method not implemented.");
   }
   helloWorld(): string {
      return "Hello this is Anoop"
   }
 }