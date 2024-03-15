import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type userDocument = HydratedDocument<user>;

@Schema({
    timestamps: true
})
export class user{
    
    @Prop()
    fullName:string;

    @Prop()
    age:string;

    @Prop()
    email:string;

    @Prop()
    password:string;

    @Prop()
    posts:string;

    @Prop()
    createdAt:string;

    @Prop()
    updatedAt:string;

    @Prop()
    deletedAt:string;
}

export const userSchema = SchemaFactory.createForClass(user);
