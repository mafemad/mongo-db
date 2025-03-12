import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateUserSettingsDto{
        
    @IsOptional() 
    @IsBoolean()  
    receiveNotifications?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveNewsletter?: boolean;

    @IsOptional() 
    @IsBoolean()      
    receiveEmail?: boolean
}

export class CreateUserDto{
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateUserSettingsDto)
    settings?: CreateUserSettingsDto;
}
