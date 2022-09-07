import { BoardDto } from '../dto/board.dto';
import { createResponseDto } from './../../../common/utils/responseFormatter.utils';

export class BoardsAPIDocs {
  /**
   * @code writer 장성우
   * @description 해당 api의 Swagger Docs
   */
  static createBoardOperation() {
    return {
      summary: '게시글 생성',
      description: '게시판에 글을 작성합니다.',
    };
  }

  static createBoardOkResponse() {
    return { description: 'OK', type: createResponseDto(BoardDto) };
  }
}
