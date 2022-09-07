import { PickType } from '@nestjs/swagger';
import { BoardsEntity } from '../entities/board.entity';

export class DeleteBoardDto extends PickType(BoardsEntity, [
  'password',
] as const) {}
