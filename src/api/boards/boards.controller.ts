import { Controller, Get, Post } from '@nestjs/common';
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
   * @description API 설명
   *
   * @POST ("/example")
   *
   * @returns json
   */
  @Post('example')
  @ApiOperation(BoardsAPIDocs.ExampleOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async example() {
    return this.boardsService.example();
  }
}
