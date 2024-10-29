import express from 'express';
import { login, signup } from '../controllers/trading_controllers.js'; // Importing login and signup functions

const router = express.Router(); // Creating router instance

router.post('/login', login); // Route for login
router.post('/signup', signup); // Route for signup

export default router; // Exporting router