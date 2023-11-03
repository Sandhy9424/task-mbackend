import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Task=sequelize.define("task",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
    ,listId:{
        type:DataTypes.INTEGER
    }
});

export default Task;