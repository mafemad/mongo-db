import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { userSchema } from "src/schemas/user.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserSettingsSchema } from "src/schemas/userSeting.schema";

@Module({
    imports:[MongooseModule.forFeature([
        {name: 'User', schema: userSchema},
        {name: 'UserSettings', schema: UserSettingsSchema}])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule{

}