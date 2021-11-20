import express from 'express';
import {userSignup} from '../controller/user-controller.js';

const Routes = express.Router();

Routes.post('/signup',userSignup);

export default Routes;
