import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "../core/type.core";
import { IBugColumRepository, IBugRepository, IBugRowRepository, IProjectInviteRepository, IProjectMemberRepository, IProjectRepository, IUserRepository } from "../interface";
import { BugColumRepository, BugRepository, BugRowRepository, ProjectInviteRepository, ProjectMemberRepository, ProjectRepository, UserRepository } from "../repository";

let container = new Container();

// container.bind(UserController).to(UserController);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IProjectRepository>(TYPES.ProjectRepository).to(ProjectRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IProjectInviteRepository>(TYPES.ProjectInviteRepository).to(ProjectInviteRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IProjectMemberRepository>(TYPES.ProjectMemberRepository).to(ProjectMemberRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IBugRepository>(TYPES.BugRepository).to(BugRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IBugColumRepository>(TYPES.BugColumnRepository).to(BugColumRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

// container.bind(UserController).to(UserController);
container.bind<IBugRowRepository>(TYPES.BugRowRepository).to(BugRowRepository);
// container.bind<IUserService>(TYPES.UserService).to(UserService);

export default container;
