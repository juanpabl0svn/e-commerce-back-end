import { Router } from "express";
import {
  getProducts,
  getProduct,
} from "../controller/controller.js";

const router = Router();

router.get("/", getProducts);
// router.get("/buy", buyProducts);
router.get("/products/:id", getProduct);

export default router;
