import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const List=sequelize.define("list",{
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
    userId:{
        type:DataTypes.INTEGER
    }
   
});

export default List;