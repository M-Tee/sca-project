import express from 'express';
import ctrl from '../Controllers/user.C.mjs'

const router = express.Router();

//Admin only routes
router.route('/users')
  .get(ctrl.getUsers);

router.route('/delete')
.delete(ctrl.delUser);


//student route
router.route('/signup')
  .post(ctrl.createUser);

router.route('/login')
  .post(ctrl.login);

export default router;
