import { PickType } from '@nestjs/swagger';
import { BoardsEntity } from '../entities/board.entity';

export class UpdateBoardDto extends PickType(BoardsEntity, [
  'title',
  'description',
  'password',
] as const) {}
