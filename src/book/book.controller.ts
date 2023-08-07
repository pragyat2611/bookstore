import { Body, Controller, Post, Req } from '@nestjs/common/decorators';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { BookService } from './book.service';
import { BookRequestItemDTO } from './dto/request/bookRequestItem.dto';
import { Book } from './entities/book.entity';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOkResponse({
    description: 'save a book',
    type: Book || null,
  })
  @Post('')
  public async saveBook(
    @Req() request: Request,
    @Body() bookRequestItemDTO: BookRequestItemDTO,
  ) {
    return this.bookService.saveBook(bookRequestItemDTO);
  }
}
