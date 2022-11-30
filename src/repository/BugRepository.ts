import { IBugRepository } from "../interface/IBugRepository";
import { Bug } from "../model/bug";

export class BugRepository implements IBugRepository{
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