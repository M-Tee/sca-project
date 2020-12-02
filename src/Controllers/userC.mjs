import User from '../Model/userM.mjs';
// import bcrypt from 'bcrypt';

async function createUser (req, res) {
  const user = new User(req.body);

  await user.save((err) => {
    if (err) {
      return res.send(err);
    }
    return res.json(user);
  });
};

async function getUsers(req, res) {
  await User.find((err, users) => {
    if (err) {
      return res.sendStatus(404);
    }

    return res.json(users)
  });
};

export default { createUser, getUsers };
