import { IBugRowRepository } from "../interface/IBugRowRepository";
import { BugRow } from "../model/bugRow";

export class BugRowRepository implements IBugRowRepository {
    Create(entity: BugRow): Promise<BugRow> {
        throw new Error("Method not implemented.");
    }
    Update(entity: BugRow): Promise<BugRow> {
        throw new Error("Method not implemented.");
    }
    GetById(Id: Object): Promise<BugRow> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<BugRow[]> {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id: Object): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}