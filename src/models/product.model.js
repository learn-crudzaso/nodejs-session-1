import { DataTypes } from "sequelize";
import database from "../config/database.js";

const Product = database.define("products",{
    ref: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Product;