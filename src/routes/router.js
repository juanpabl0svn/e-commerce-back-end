import { Router } from "express";
import {
  getProducts,
  getProduct,
  createUser,
  getUser,
} from "../controller/controller.js";

const router = Router();

router.get("/", getProducts);
// router.get("/buy", buyProducts);
router.get("/products/:id", getProduct);

router.post('/user',getUser)

router.post('/account',createUser)

// Middleware.
// router.use((req,res,next)=>{})

// router.get('/createall',createDataBase)

export default router;
