import { Module } from '@nestjs/common';
import { PostController } from './postController';

@Module({
  controllers: [PostController]
})
export class PostModule {

}
