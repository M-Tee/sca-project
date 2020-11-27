import mongoose from 'mongoose';

const { Schema } = mongoose;

const userModel = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    regNo: { type: String }
  }
);

const User = mongoose.model('User', userModel);

export default User;
