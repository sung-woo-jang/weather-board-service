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
   * @description 게시판 작성
   *
   * @param CreateBoardDto
   *
   * @return BoardDto
   */
  async createBoard(createBoardDto: CreateBoardDto) {
    const board = this.boardsRepository.create(createBoardDto);
    const result = await this.boardsRepository.save(board);

    return new BoardDto(result);
  }

  /**
   * @code writer 장성우
   * @description 게시판 작성
   *
   * @param id
   */
  async deleteBoard() {
    return 'deleteBoard';
  }

  /**
   * @code writer 장성우
   * @description 게시판 작성
   *
   * @param id
   * @param UpdateBoardDto
   *
   * @returns BoardDto
   */
  async updateBoard() {
    return 'updateBoard';
  }

  /**
   * @code writer 장성우
   * @description 게시글 리스트 조회
   *
   * @returns [BoardsListDto]
   */
  async getAllBoards() {
    return 'getAllBoards';
  }
}
