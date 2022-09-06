import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardsEntity } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
  ) {}

  /**
   * @code writer 장성우
   * @description 게시판 생성 API
   *
   * @param
   *
   * @return
   */
  async example() {
    return 'Example API!';
  }
}
