import { Router } from "express";
import products from "../controllers/product.controller.js";

const router = Router();

router.use("/products",products);

export default router;