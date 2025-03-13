import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UserSettings } from "src/schemas/userSeting.schema";

@Injectable()
export class UserService{
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings>
    ){}
    
    async createUser({settings, ...createUserDto}: CreateUserDto){
        if(settings){
            const newUserSettings = new this.userSettingsModel(settings);
            const savedSettings = await newUserSettings.save();
            const newUser = new this.userModel({...createUserDto, settings: savedSettings._id});
            return newUser.save();
        }
        
        const newUser = new this.userModel(createUserDto);

        return newUser.save()
    }

    async getUsers(){
        return this.userModel.find().populate(['settings', 'posts']).exec();
    }
    
    async getUserById(id: string){
        return this.userModel.findById(id).populate(['settings', 'posts']).exec();
    }
    
    async updateUser(id: string, updateUser: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUser,{new: true}).exec();
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}