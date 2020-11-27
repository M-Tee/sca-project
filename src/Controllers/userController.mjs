import User from '../Model/userModel.mjs';
import bcrypt from 'bcrypt';

const createUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt();
    // const password =  await bcrypt.hash(req.body.password, salt);

    req.body.password = await bcrypt.hash(req.body.password, salt)

    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(user);
    });
  } catch {
    res.status(400).send()
  };
};

export default {
  createUser
};
