import { injectable } from "inversify";
import { IUserRepository } from "../interface/repository";
import { ProjectMember } from "../model/projectMember";

@injectable()
export class UserRepository implements IUserRepository {
    Create(entity: ProjectMember): Promise<ProjectMember> {
        throw new Error("Method not implemented.");
    }
    Update(entity: ProjectMember): Promise<ProjectMember> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<ProjectMember> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<ProjectMember[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}