import { OmitType } from '@nestjs/swagger';
import { BoardsEntity } from '../entities/board.entity';

export class BoardDto extends OmitType(BoardsEntity, [
  'deleteAt',
  'updateAt',
] as const) {
  constructor(board: BoardsEntity) {
    super();
    this.id = board.id;
    this.createAt = board.createAt;
    this.title = board.title;
    this.description = board.description;
    this.password = board.password;
  }
}
