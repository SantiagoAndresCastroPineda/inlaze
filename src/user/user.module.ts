import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'user',schema: userSchema}])],
  controllers: [UserController]
})



export class UserModule {
}
