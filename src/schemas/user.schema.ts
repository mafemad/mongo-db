import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./userSeting.schema";
import { Post } from "./post.schema";

@Schema()
export class User{

    @Prop({required: true})
    name: string;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings'})
    settings?: UserSettings;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
    posts: Post[]
}

export const userSchema = SchemaFactory.createForClass(User);