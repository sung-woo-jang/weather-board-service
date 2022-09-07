import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'boards' })
export class BoardsEntity extends CommonEntity {
  @ApiProperty({
    example: '최대 20자.🤔',
    description: '게시글 제목',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '최대 200자.🤔',
    description: '게시글 내용',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Test123$', description: '비밀번호', required: true })
  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*?[0-9]).{6,}$/, {
    message:
      '비밀번호는 6자 이상이어야 하고, 숫자 1개 이상 반드시 포함 되어야 합니다.',
  })
  password: string;
}
