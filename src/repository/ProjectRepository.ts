import { injectable } from "inversify";
import { IProjectRepository } from "../interface/repository";
import { Project } from "../model/project";


@injectable()
export class ProjectRepository implements IProjectRepository {
    Create(entity: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    Update(entity: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<Project> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<Project[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}