import express from 'express';
import signUpRoute from './SignUp.js';
// import signInRoute from './SignIn.js';
// import userInfoRoute from './UserInfo.js'

const router = express.Router();

router.use('/signup', signUpRoute);
// router.use('/signin', signInRoute);
// router.use('/userinfo', userInfoRoute);

export default router;
