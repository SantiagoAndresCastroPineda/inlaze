import { Module } from '@nestjs/common';
import { PostController } from './postController';
import { MongooseModule } from '@nestjs/mongoose';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { postSchema } from './post.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'post',schema: postSchema}])],
  controllers: [PostController]
})
export class PostModule {

}
