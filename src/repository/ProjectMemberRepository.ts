import { injectable } from "inversify";
import { IProjectMemberRepository } from "../interface/repository";
import { Project } from "../model/project";
import { ProjectMember } from "../model/projectMember";
import { User } from "../model/user";

@injectable()
export class ProjectMemberRepository implements IProjectMemberRepository {
    getAllMembersInAProject(projectId: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    getAllProjectsOfAUser(userId: string): Promise<Project[]> {
        throw new Error("Method not implemented.");
    }
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