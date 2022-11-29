import { injectable } from "inversify";
import { DataSource, Repository as repository } from "typeorm";
import { IRepository } from "./IRepository";

@injectable()
export default class Repository<T> implements IRepository<T> {
  private readonly dataSource: DataSource;
  protected readonly dataSourceRepository: repository<T>;
  constructor(dataSource: DataSource, dataSourceRepository: repository<T>) {
    this.dataSource = dataSource;
    this.dataSourceRepository = dataSourceRepository;
  }
  async Create(entity: T): Promise<T> {
    await this.dataSourceRepository.save(entity);
    return entity;
  }
  async Update(entity: T): Promise<T> {
    // const oldentity = await this.GetById(entity?.Id as Object);
    // if (!oldentity) {
    //   await this.dataSourceRepository.update(entity);
    // }
    return entity;
  }
  async GetById(Id: Object): Promise<T> {
    throw new Error("Method not implemented.");
  }
  async GetAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  async DeleteById(Id: Object): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
