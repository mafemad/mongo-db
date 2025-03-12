import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSettings{

    @Prop()
    receiveNotifications?: boolean;

    @Prop()
    receiveNewsletter?: boolean;

    @Prop()
    receiveEmail?: boolean;

}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);