import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardDto } from './dto/board.dto';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
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
  async deleteBoard(id: number, deleteBoardDto: DeleteBoardDto) {
    const { password } = deleteBoardDto;
    const board = await this.boardsRepository.findOneBy({ id });

    if (!board) throw new NotFoundException('게시글을 찾을 수 없습니다.');

    if (board.password !== password)
      throw new ForbiddenException('비밀번호가 틀립니다.');

    const result = await this.boardsRepository.softDelete({ id });
    if (!result.affected)
      throw new NotFoundException('게시글을 찾을 수 없습니다.');

    return;
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
  async updateBoard(id: number, updateBoardDto: UpdateBoardDto) {
    const { password } = updateBoardDto;
    const board = await this.boardsRepository.findOneBy({ id });

    if (!board) throw new NotFoundException('게시글을 찾을 수 없습니다.');

    if (board.password !== password)
      throw new ForbiddenException('비밀번호가 틀립니다.');

    for (const key in updateBoardDto) board[key] = updateBoardDto[key];

    await board.save();

    return board;
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
