import { Router } from "express";
import Product from "../models/product.model.js";

const products = Router();

products.get("/", async (req, res)=>{

    // select * from products;
    const dataProducts = await Product.findAll();

    res.status(200).json(dataProducts);
})

export default products;