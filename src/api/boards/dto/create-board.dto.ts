import { PickType } from '@nestjs/swagger';
import { BoardsEntity } from '../entities/board.entity';

export class CreateBoardDto extends PickType(BoardsEntity, [
  'title',
  'description',
  'password',
] as const) {}
