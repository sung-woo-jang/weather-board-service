import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ValidationPagePipe } from './../../common/pipe/validationPage.pipe';
import { ValidationTakePipe } from './../../common/pipe/validationTake.pipe';
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
  @ApiOperation(BoardsAPIDocs.createBoardOperation())
  @ApiOkResponse(BoardsAPIDocs.createBoardOkResponse())
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
  @HttpCode(204)
  @ApiOperation(BoardsAPIDocs.deleteBoardOperation())
  @ApiNoContentResponse(CommonResponse.NoContentResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
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
  @ApiOperation(BoardsAPIDocs.updateBoardOperation())
  @ApiOkResponse(BoardsAPIDocs.updateBoardOkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
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
  @ApiQuery({
    name: 'take',
    type: 'number',
    description: '1~20개의 범위를 설정할 수 있습니다.',
    required: true,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: true,
  })
  @Get('/')
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiOperation(BoardsAPIDocs.getBoardListOperation())
  getBoardList(
    @Query('take', ValidationTakePipe) take: number,
    @Query('page', ValidationPagePipe) page: number,
  ) {
    return this.boardsService.getBoardList({ take, page });
  }
}
