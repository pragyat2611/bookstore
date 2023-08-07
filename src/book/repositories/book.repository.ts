import { BaseRepository } from 'core/base/base.repository';
import { Book } from '../entities/book.entity';

export class BookRepository extends BaseRepository<Book> {
  public async saveBook(book): Promise<Book> {
    return this.saveItem(book).catch((error) =>
      Promise.reject(error ? error : null),
    );
  }
}
