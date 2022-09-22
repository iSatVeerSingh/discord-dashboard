import { model, Schema } from 'mongoose';

export interface UserSchemaType {
  id: string;
  discordId: string;
  accessToken: string;
  refreshToken: string;
}

const UserSchema = new Schema<UserSchemaType>({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

const User = model('user', UserSchema);

export default User;
