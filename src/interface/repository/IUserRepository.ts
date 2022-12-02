import { ProjectMember } from "../model/projectMember";
import { IRepository } from "../utils/repository/IRepository";

export interface IUserRepository extends IRepository<ProjectMember> {
}