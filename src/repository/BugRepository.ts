import { injectable } from "inversify";
import { IBugRowRepository } from "../interface/repository";
import { Bug } from "../model/bug";

@injectable()
export class BugRepository implements IBugRowRepository{
    Create(entity: Bug): Promise<Bug> {
        throw new Error("Method not implemented.");
    }
    Update(entity: Bug): Promise<Bug> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<Bug> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<Bug[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}