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

  static deleteBoardOperation() {
    return {
      summary: '게시글 삭제',
      description: '게시판의 글을 삭제합니다.',
    };
  }

  static deleteBoardOkResponse() {
    return { description: 'OK' };
  }

  static updateBoardOperation() {
    return {
      summary: '게시글 수정',
      description: '게시판에 글을 수정합니다.',
    };
  }

  static getBoardListOperation() {
    return {
      summary: '게시글 조회',
      description: '게시판에 글을 조회합니다.',
    };
  }

  static updateBoardOkResponse() {
    return { description: 'OK', type: createResponseDto(BoardDto) };
  }
}
