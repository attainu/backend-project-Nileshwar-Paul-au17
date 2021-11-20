import express from 'express';
import {userSignUp, userLogIn} from '../controller/user-controller.js';
//import { getProductById, getProducts } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login', userLogIn);

// router.get('/products', getProducts);
// router.get('/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);

export default router;


