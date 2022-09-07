import { OmitType } from '@nestjs/swagger';
import { BoardsEntity } from '../entities/board.entity';

export class BoardDto extends OmitType(BoardsEntity, ['deleteAt'] as const) {
  constructor(board: BoardsEntity) {
    super();
    this.id = board.id;
    this.title = board.title;
    this.description = board.description;
    this.createAt = board.createAt;
    this.updateAt = board.updateAt;
  }
}
