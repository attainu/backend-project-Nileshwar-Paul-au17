import express from 'express';
import {userSignUp, userLogIn,} from '../controller/user-controller.js';
import {getProducts,getProductsById } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login', userLogIn);
router.get('/products',getProducts);
router.get('/products/:id',getProductsById);


export default router;


