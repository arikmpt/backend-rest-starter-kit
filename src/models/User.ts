import { Schema, model } from 'mongoose'

interface UserInterface {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
}

const schema = new Schema<UserInterface>({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String
  }
}, {
  timestamps: true
})

const UserModel = model<UserInterface>('users', schema)

export default UserModel
