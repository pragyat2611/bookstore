import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { BookRepository } from './repositories/book.repository';

const entities = [Book];
const repositories = [BookRepository];
@Module({
  imports: [TypeOrmModule.forFeature([...entities, ...repositories])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
