import express from 'express';
import dotenv from 'dotenv';
import database from './config/database.js';
import Product from './models/product.model.js';
import router from './routes/router.js';

dotenv.config();

const app = express();

app.get('/health', (req, res)=>{
    res.status(200).send("nice!");
})

app.use("/api/v1",router);
app.use(express.static("public"))

app.listen(process.env.PORT, ()=>{
    console.log("Successful in "+process.env.PORT);

    database.authenticate();
    // database.sync();
})