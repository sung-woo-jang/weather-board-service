import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmAsyncModuleOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test',
    database: 'test',
    namingStrategy: new SnakeNamingStrategy(),
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // database: 'database.db',
    synchronize: process.env.MODE == 'dev', //! set 'false' in production
    autoLoadEntities: true,
    logging: process.env.MODE == 'dev',
    charset: 'utf8mb4_unicode_ci',
  }),
};
