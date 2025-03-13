import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { PostSchema } from "src/schemas/post.schema";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { User, userSchema } from "src/schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Post', schema: PostSchema},
        {name: User.name,schema: userSchema,}
    ])],
    controllers: [PostsController],
    providers: [PostsService],
    exports: []
})
export class PostModule{}