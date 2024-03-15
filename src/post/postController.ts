import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { post } from './post.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';



@Controller('post')
export class PostController {

    constructor(
        @InjectModel(post.name)
        private  postModel: mongoose.Model<post>,
      ) {}

    @Post("save")
    async  save(@Body() post: post):Promise<post> {
        const res = await this.postModel.create(post);
        return res;
    }

    @Put("update")
    async  update(@Body() post: post) {
       // return await  this.postRepository.save(post);
    }

    @Get("getAll")
    async getAll():Promise<post[]> {
       const post = await this.postModel.find()
       return post;
    }

    @Delete("delete")
    async delete(@Param('id') id:string): Promise<post> {
        const filter  = { _id: id };
        const deleted = await this.postModel.findOneAndDelete(filter);
        return deleted;
    }

}
