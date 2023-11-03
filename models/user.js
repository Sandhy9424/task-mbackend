import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

export default User;