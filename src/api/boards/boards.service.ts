import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsBuilder } from './../../builder/boards/board.builder';
import { Repository } from 'typeorm';
import { BoardDto } from './dto/board.dto';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardsEntity } from './entities/board.entity';
import { Pagination, PaginationOptions } from './paginate';

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
    const { title, description, password } = createBoardDto;
    const board = new BoardsBuilder()
      .setTitle(title)
      .setDescription(description)
      .setPassword(password)
      .build();
    await this.boardsRepository.save(board);

    return new BoardDto(board);
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
      throw new NotFoundException('게시글 삭제 중 오류가 발생했습니다.');

    return true;
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

    await this.boardsRepository.save(board);

    return new BoardDto(board);
  }

  /**
   * @code writer 장성우
   * @description 게시글 리스트 조회
   *
   * @returns [BoardsListDto]
   */
  async getBoardList(options: PaginationOptions) {
    const { take, page } = options;
    const [results, total] = await this.boardsRepository.findAndCount({
      select: ['id', 'title', 'description', 'createAt'],
      take,
      skip: take * (page - 1),
      order: { createAt: 'ASC' },
    });

    const newResult = results.map((board) => new BoardDto(board));

    return new Pagination<BoardDto>({
      results: newResult,
      total,
    });
  }
}
