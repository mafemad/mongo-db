import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    
    async createUser(createUserDto: CreateUserDto){
        const newUser = new this.userModel(createUserDto);

        return newUser.save()
    }

    async getUsers(){
        return this.userModel.find().exec();
    }
    
    async getUserById(id: string){
        return this.userModel.findById(id).exec();
    }
    
    async updateUser(id: string, updateUser: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUser,{new: true}).exec();
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}