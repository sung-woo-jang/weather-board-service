import { CommonEntity } from './../../../common/entities/common-entity';
import { Entity } from 'typeorm';

@Entity({ name: 'boards' })
export class BoardsEntity extends CommonEntity {}
