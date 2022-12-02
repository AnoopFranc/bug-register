/**
 * InversifyJS need to use the type as identifiers at runtime.
 * We use symbols as identifiers but you can also use classes and or string literals.
 */
 export const TYPES = {
  AuthService: Symbol('UserService'),
  AuthController: Symbol('UserController'),

  UserService: Symbol('UserService'),
  UserController: Symbol('UserController'),
  UserRepository: Symbol('UserRepository'),

  ProjectService: Symbol('ProjectService'),
  ProjectController: Symbol('ProjectController'),
  ProjectRepository: Symbol('ProjectRepository'),

  ProjectMemberService: Symbol('ProjectMemberService'),
  ProjectMemberController: Symbol('ProjectMemberController'),
  ProjectMemberRepository: Symbol('ProjectMemberRepository'),

  ProjectInviteService: Symbol('ProjectInviteService'),
  ProjectInviteController: Symbol('ProjectInviteController'),
  ProjectInviteRepository: Symbol('ProjectInviteRepository'),

  BugService: Symbol('BugService'),
  BugController: Symbol('BugController'),
  BugRepository: Symbol('BugRepository'),

  BugColumnService: Symbol('BugColumnService'),
  BugColumnController: Symbol('BugColumnController'),
  BugColumnRepository: Symbol('BugColumnRepository'),

  BugRowService: Symbol('BugRowService'),
  BugRowController: Symbol('BugRowController'),
  BugRowRepository: Symbol('BugRowRepository'),
};