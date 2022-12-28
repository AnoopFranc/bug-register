import { inject, injectable } from "inversify";
import { OAuth2Client } from "google-auth-library";
import * as jwt from "jsonwebtoken";
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
  async signInByGmail(credential: string): Promise<User | any> {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);

    try {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (payload.email_verified) {
        try {
          let user = await this.userRepository.getUserByEmail(payload.email);
          if (!user) {
            const _user = new User();
            _user.Email = payload.email;
            _user.Name = payload.name;
            try {
              const user = await this.userRepository.Create(_user);
            } catch (error) {
              throw { error };
            }
          }
          const token = jwt.sign(
            { email: user.Email },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRY,
            }
          );
          return {
            token,
          };
        } catch (error) {
          throw { error };
        }
      }
    } catch (error) {
      throw { error: "Invalid user detected. Please try again" };
    }
  }
  helloWorld(): string {
    return "Hello this is Anoop";
  }
}
