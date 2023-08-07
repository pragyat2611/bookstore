import { MongoRepository } from 'typeorm';

export class BaseRepository<T> extends MongoRepository<T> {
  public async saveItem(item): Promise<T> {
    return this.save(item).catch((error) =>
      Promise.reject(error ? error : null),
    );
  }
}
