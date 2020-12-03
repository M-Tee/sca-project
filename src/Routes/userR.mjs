import express from 'express';
import ctrl from '../Controllers/userC.mjs'

const router = express.Router();

router.route('/users')
  .get(ctrl.getUsers);

router.route('/signup')
  .post(ctrl.createUser);

router.route('/login')
  .post(ctrl.login);

export default router;
