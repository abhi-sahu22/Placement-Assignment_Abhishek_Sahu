import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const userSchema = mongoose.Schema(
  {
    _id: {
        type: String,
        default: uuidv4,
      },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: {
       type: String, 
       required: true 
      },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
