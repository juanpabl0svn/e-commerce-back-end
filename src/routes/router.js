import { Router } from "express";
import { getProducts } from "../controller/controller.js";


const router = Router();

router.get("/", getProducts)
export default router;
