import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { BookRequestItemDTO } from './dto/request/bookRequestItem.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    public readonly bookRepository: MongoRepository<Book>,
  ) {}

  /**
   * save a book.
   * @param book
   */
  public async saveBook(bookRequestItem: BookRequestItemDTO): Promise<Book> {
    console.log(bookRequestItem);
    return this.bookRepository.save(bookRequestItem);
  }
}
