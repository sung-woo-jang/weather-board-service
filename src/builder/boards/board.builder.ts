import { BuilderCommon } from '../builder';
import { BoardsEntity } from './../../api/boards/entities/board.entity';

export class BoardsBuilder extends BuilderCommon<BoardsEntity> {
  constructor() {
    super(BoardsEntity);
  }

  setTitle(title: string): BoardsBuilder {
    this.object.title = title;
    return this;
  }

  setDescription(description: string): BoardsBuilder {
    this.object.description = description;
    return this;
  }

  setPassword(password: string): BoardsBuilder {
    this.object.password = password;
    return this;
  }

  setCreateAt(createAt: Date): BoardsBuilder {
    this.object.createAt = createAt;
    return this;
  }

  setUpdateAt(updateAt: Date): BoardsBuilder {
    this.object.updateAt = updateAt;
    return this;
  }
}
