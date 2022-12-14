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
    example: 'μ΅λ 20μ.π€',
    description: 'κ²μκΈ μ λͺ©',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'μ΅λ 200μ.π€',
    description: 'κ²μκΈ λ΄μ©',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Test123$', description: 'λΉλ°λ²νΈ', required: true })
  @Column({ type: 'varchar' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*?[0-9]).{6,}$/, {
    message:
      'λΉλ°λ²νΈλ 6μ μ΄μμ΄μ΄μΌ νκ³ , μ«μ 1κ° μ΄μ λ°λμ ν¬ν¨ λμ΄μΌ ν©λλ€.',
  })
  password: string;

  setTitle(title: string) {
    this.title = title;
  }

  setDescription(description: string) {
    this.description = description;
  }
}
