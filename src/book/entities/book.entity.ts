import { IsInt, Max } from 'class-validator';
import { BaseEntity } from 'core/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('book')
export class Book extends BaseEntity<Book> {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @IsInt()
  @Max(10000)
  price: number;

  @Column()
  @IsInt()
  @Max(4)
  ratings: number;
}
