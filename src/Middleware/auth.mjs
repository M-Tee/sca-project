import {} from 'dotenv/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Async/await prevent generateToken from firing before bcrypt resolves
export async function passwordAuth(password1, password2){
  if ( await bcrypt.compare(password1, password2)){
    return true;
  }
  //What exit message should i use?
  return false;
};

export function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 });
};

