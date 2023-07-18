import { Router } from "express";
import {
  getProducts,
  getProduct,
  createUser,
  getUser,
  logIn
} from "../controller/controller.js";

const router = Router();

router.get("/", getProducts);
// router.get("/buy", buyProducts);
router.get("/products/:id", getProduct);

router.get('/login',logIn)

router.post('/user',getUser)

router.post('/account',createUser)


export default router;
