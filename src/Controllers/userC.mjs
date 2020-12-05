import User from '../Model/userM.mjs';
import { passwordAuth, generateToken } from '../Middleware/auth.mjs';
// import bcrypt from 'bcrypt';

//Signup logic
async function createUser (req, res) {
  const user = new User(req.body);

  await user.save((err) => {
    if (err) {
      return res.send(err);
    }
    return res.json(user);
  });
};

//Login logic
async function login(req, res) {
  try {

    const user = await User.findOne({ email: req.body.email }, async (err, user) => {
      if (err) {
        return res.send(err);
      };

      //Check if user exits and run bcrypt compare
      if (!user) {
        await passwordAuth('23345', '3455');
        return res.status(404).send('Wrong email and Password');
      }

      const match = await passwordAuth(req.body.password, user.password);
      if (match) {
        return user;
      };

      return res.status(404).send('Wrong email and Password');
    });

    const token = generateToken(user);
    user.token = token;
    await user.save();
    return res.send(`Welcome back ${user.firstName}!`);

  } catch (err) {
    return console.log(err);
  }
};

//fetch users Logic.
async function getUsers(req, res) {
  await User.find((err, users) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.json(users)
  });
};

export default { createUser, getUsers, login };
