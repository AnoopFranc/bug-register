import { Project } from "../../model/project";
import { ProjectMember } from "../../model/projectMember";
import { User } from "../../model/user";
import { IRepository } from "../../utils/repository/IRepository";

export interface IProjectMemberRepository extends IRepository<ProjectMember> {
  getAllMembersInAProject(projectId: string): Promise<User[]>;
  getAllProjectsOfAUser(userId: string): Promise<Project[]>;
}
