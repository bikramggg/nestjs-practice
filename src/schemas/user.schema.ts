import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongooseUniqueValidator from 'mongoose-unique-validator';
import * as validator from 'validator';

export type UserDocument = HydratedDocument<User>;

enum status {
  Active = "ACTIVATED", //or User = "user",
  Deactive = "DEACTIVATED" , // or Admin = "admin",
}

@Schema({
  versionKey: false,
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret.password;
      return ret;
    },
  },
  toObject: {
    transform: (doc, ret) => {
      delete ret.password;
      return ret;
    },
  },
})
export class User {
<<<<<<< Updated upstream
=======
  
  @Prop({type: mongoose.Schema.Types.ObjectId, auto: true})
  _id: string;

>>>>>>> Stashed changes
  @Prop({ required: true, minlength: 3 })
  name: string;

  @Prop({
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Invalid email address',
    },
  })
  email: string;

  @Prop({
    required: true,
    minlength: 4,
    maxlength: 20,
    validate: {
      validator: (value: string) =>
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value),
      message: 'password too weak',
    },
  })
  password: string;

  @Prop({ required: false })
  phone?: number;

  @Prop({ required: false })
  address?: string;

  @Prop({ required: false })
  role?: string;

  @Prop({ required: false })
  status?: status ;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseUniqueValidator);
