import User from '../Model/userM.mjs';
import auth from '../Middleware/auth.mjs';
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
  await User.findOne(
    { email: req.body.email },
    (err, user) => {
      if (err) {
        return res.send(err);
      };
      //Check if user exits and run bcrypt compare
      if (!user) {
        auth('23345', '3455');
        return res.status(404).send('Wrong email and Password');
      }
      //Capture token
      const token = auth(req.body.password, user.password, user);
      saveToken(user, token);
      console.log(token);
    }
  );
  //save token to db
  async function saveToken(user, token) {
    user.token = token;
    await user.save((err) => {
      if (err) {
        return res.send(err);
      }
      res.send(`Welcome back ${user.firstName}!`);
      return res.json(user);
    });
  };
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
