import { injectable } from "inversify";
import { EntityTarget, Repository } from "typeorm";
import datasource from "../../config/ormConfig";

@injectable()
export class DatabaseService {
  private _model: any;
  public _repo: Repository<any>;
  constructor(model: any) {
    this._model = model;
  }
  public initialize = async () => {
    if (!datasource.isInitialized) {
      const dt = await datasource.initialize();
      this._repo = dt.getRepository(this._model);
      return this._repo;
    } else {
      this._repo = datasource.getRepository(this._model);
      return this._repo;
    }
  };
}
