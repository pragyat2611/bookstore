import { Column, ObjectId, ObjectIdColumn } from 'typeorm';

export abstract class BaseEntity<T> {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column()
  createdOn: Date;

  @Column()
  updatedOn: Date;

  constructor(book?: Partial<T>) {
    Object.assign(this, book);
  }
}
