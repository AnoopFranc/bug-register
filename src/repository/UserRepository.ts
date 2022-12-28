import { injectable } from "inversify";
import { Repository } from "typeorm";
import datasource from "../config/ormConfig";
import { IUserRepository } from "../interface/repository";
import { User } from "../model/user";
import { DatabaseService } from "../utils/database/database";

@injectable()
export class UserRepository implements IUserRepository {
  private _repository: Repository<User>;

  constructor() {
    const db = new DatabaseService(User);
    db.initialize().then((repo) => {
      this._repository = repo;
    });
  }
  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await this._repository.findOneBy({
        Email: email,
      });
      return user;
    } catch (error) {
      console.log("error:::", error);
      throw { error };
    }
  }
  async Create(entity: User): Promise<User> {
    try {
      const user = await this._repository.save(entity);
      return user;
    } catch (error) {
      console.log("error:::", error);
      throw { error };
    }
  }
  Update(entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  GetById(Id: Object): Promise<User> {
    throw new Error("Method not implemented.");
  }
  GetAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  DeleteById(Id: Object): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
