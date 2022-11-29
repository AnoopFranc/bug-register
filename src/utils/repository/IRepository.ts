export interface IRepository<T> {
  /**
   * creates an entity in repo
   * @param entity
   */
  Create(entity: T): Promise<T>;
  /**
   * updates a value of an entity
   * @param entity
   */
  Update(entity: T): Promise<T>;
  /**
   * retirevies a single item form repository
   * @param Id
   */
  GetById(Id: Object): Promise<T>;
  /**
   *
   */
  GetAll(): Promise<T[]>;
  /**
   * deletes a data from repository
   * @param Id - unique id of the entity to be deleted
   */
  DeleteById(Id: Object): Promise<Object>;
}
