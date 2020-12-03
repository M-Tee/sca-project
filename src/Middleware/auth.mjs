import {} from 'dotenv/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Async/await prevent generateToken from firing before bcrypt resolves
async function passwordAuth(password1, password2, user){
  if (await bcrypt.compare(password1, password2)){
    return generateToken(user);
  }
  //What exit message should i use?
  return console.log("wrong password");
};

function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 });
  // console.log(token);
};

export default passwordAuth;
