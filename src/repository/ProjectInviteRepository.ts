import { IProjectInviteRepository } from "../interface/IProjectInviteRepository";
import { ProjectInvite } from "../model/projectInvite";

export class ProjectInviteRepository implements IProjectInviteRepository {
    Create(entity: ProjectInvite): Promise<ProjectInvite> {
        throw new Error("Method not implemented.");
    }
    Update(entity: ProjectInvite): Promise<ProjectInvite> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<ProjectInvite> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<ProjectInvite[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}