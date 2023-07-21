import { Router } from "express";
import {
  getProducts,
  getProduct,
  createUser,
  getUser,
  logIn,
  createDatabase,
  createComment
} from "../controller/controller.js";

const router = Router();

router.get("/", getProducts);
// router.get("/buy", buyProducts);
router.get("/products/:id", getProduct);

router.get('/login',logIn)

router.post('/user',getUser)

router.post('/account',createUser)

router.post('/comment',createComment)

router.get('/create',createDatabase)


export default router;
