import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from './../../common/responses/common.response';
import { BoardsService } from './boards.service';
import { BoardsAPIDocs } from './docs/boards.docs';

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
  async createBoard() {
    return this.boardsService.createBoard();
  }

  /**
   * @code writer 장성우
   * @description 게시글 삭제
   *
   * @Delete ("/1")
   *
   * @returns 204
   */
  @Delete('')
  async deleteBoard() {
    return this.boardsService.deleteBoard();
  }

  /**
   * @code writer 장성우
   * @description 게시글 수정
   *
   * @Patch ("/1")
   *
   * @returns 200 - json
   */
  @Patch()
  async updateBoard() {
    return this.boardsService.updateBoard();
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
