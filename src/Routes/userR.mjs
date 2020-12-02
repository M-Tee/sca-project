import express from 'express';
import controller from '../Controllers/userC.mjs'

const router = express.Router();

router.route('/users')
  .get(controller.getUsers);

router.route('/signup')
  .post(controller.createUser);

export default router;
