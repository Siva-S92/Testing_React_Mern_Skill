import express from 'express';
import { getProducts, uploadProduct } from '../controller/products.js';

const router = express.Router();


router.route("/upload").post(uploadProduct);
router.route("/get_products").post(getProducts);



export const productRouter = router;