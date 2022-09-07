import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from './../../common/responses/common.response';
import { BoardsService } from './boards.service';
import { BoardsAPIDocs } from './docs/boards.docs';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@ApiTags('게시판')
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  /**
   * @code writer 장성우
   * @description 게시글 작성
   *
   * @POST ("")
   *
   * @returns 201 - json
   */
  @Post('')
  @ApiOperation(BoardsAPIDocs.ExampleOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  /**
   * @code writer 장성우
   * @description 게시글 삭제
   *
   * @Delete ("/1")
   *
   * @returns 204
   */
  @Delete('/:id')
  async deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteBoardDto: DeleteBoardDto,
  ) {
    return this.boardsService.deleteBoard(id, deleteBoardDto);
  }

  /**
   * @code writer 장성우
   * @description 게시글 수정
   *
   * @Patch ("/1")
   *
   * @returns 200 - json
   */
  @Patch('/:id')
  async updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }
  /**
   * @code writer 장성우
   * @description 게시글 리스트 조회
   *
   * @POST ("/")
   *
   * @returns 200 - Array<json>
   */
  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
