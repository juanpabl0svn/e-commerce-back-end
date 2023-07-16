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

// router.get('/createall',createDataBase)

export default router;
