import { Body, Controller ,Delete,Get, Param, Post, Put} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { user } from './user.entity';


@Controller('user')
export class UserController {
    

    constructor(
        @InjectModel(user.name)
        private  userModel: mongoose.Model<user>,
      ) {}


    @Post("save")
    async save(@Body() user: user):Promise<user> {
        const res = await this.userModel.create(user);
        return res;
    }

    @Put("update")
    update() {
        return 'all post';
    }

    @Get("getAll")
    async getAll():Promise<user[]> {
        const post = await this.userModel.find()
        return post;
     }

    @Delete("delete")
    delete(@Param('idUser') idUser:string): any {
        return {idUser:idUser,
        delete:true,
        count:1};
    }

}
