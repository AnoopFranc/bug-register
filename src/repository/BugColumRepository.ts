import { IBugColumRepository } from "../interface/IBugColumRepository";
import { BugColumn } from "../model/bugColumn";

export class BugColumRepository implements IBugColumRepository {
    Create(entity: BugColumn): Promise<BugColumn> {
        throw new Error("Method not implemented.");
    }
    Update(entity: BugColumn): Promise<BugColumn> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<BugColumn> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<BugColumn[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}