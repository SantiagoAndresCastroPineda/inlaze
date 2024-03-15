import { Prop,Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";

export type postDocument = HydratedDocument<post>;

@Schema({
    timestamps: true
})
export class post{

    @Prop()
    title:string;

    @Prop()
    content:string;

    @Prop()
    likes:string;

    @Prop()
    createdAt:string;

    @Prop()
    updatedAt:string;

    @Prop()
    deletedAt:string;

    @Prop()
    userId:string;





}