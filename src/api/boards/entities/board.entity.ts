import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity({ name: 'boards' })
export class BoardsEntity extends CommonEntity {
  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  description: string;

  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*?[0-9]).{6,}$/)
  password: string;
}
