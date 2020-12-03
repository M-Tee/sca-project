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

      if (!user) {
        auth('23345','3455');
        return res.status(404).send('Wrong email and Password');
      }
      const token = auth(req.body.password, user.password, user);
      console.log(token);

      //attempting: save token to db
      // user.token = token;
      // user.save((err) => {
      //   if (err) {
      //     return res.send(err);
      //   }
      //   return res.json(user);
      // });

      return res.send(`Welcome back ${user.firstName}!`)
      //Check if user exits.
      //compare passwords
      //generate token
      //save token to db
    }
  );
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
