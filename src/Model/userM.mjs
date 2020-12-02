import mongoose from 'mongoose';
import hashing from './preUserM.mjs'; //import the plugin

const { Schema } = mongoose;

//Define the schema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: 1
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    regNo: {
      type: String,
      required: true
    }
  }
);

//Load the plugin
await userSchema.plugin(hashing);

//Compile the model
const User = mongoose.model('User', userSchema);

export default User;
