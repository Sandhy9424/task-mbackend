import sequelize from "./database.js";
import Task from "./models/task.js";
import List from "./models/lists.js";
import User from "./models/user.js";
import { response } from "express";
import { where } from "sequelize";

sequelize.sync().then(()=>console.log("sync success")).catch("failed sync")


User.hasMany(List)
List.belongsTo(User)

List.hasMany(Task)
Task.belongsTo(List)

export const addUser=(req,res)=>{
    console.log(req)
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    }).then((response)=> res.send("Response Recived :"+req.body))
   .catch((err)=>console.log(err))
}

export const addList=(req,res)=>{

    List.create({
        name:req.body.name,
        userId:req.body.userId
    }).then((response)=> res.send("Response Recived :"+req.body))
    .catch((err)=>console.log(err))
}

export const addTask=(req,res)=>{

    Task.create({
        name:req.query.name,
        listId:req.query.listId
    }).then((response)=> res.send("Response Recived :"+req.body))
    .catch((err)=>console.log(err))
}
export const getuserbyemail=(req,res)=>{
    User.findAll({
        include:[{model:List}],
        where:{
            email:req.query.email
        }
    }).then((response)=>{
    if(response.password==req.query.password){
        res.send(response)
    }
    else{
        res.send(response);
    }
}).catch((err)=>console.log(err))
}

export const gettaskbylistid=(req,res)=>{
List.findAll({
   include:[{model:Task}],
   where:{id:req.query.listId}
}).then((response)=>{res.send(response)}).catch((err)=>console.log(err))

}
export const destroytask=(req,res)=>{
    Task.destroy({
        where:{id:req.query.taskid}
    }).then(()=>res.send("sucess")).catch((err)=>console.log(err));
}

export const updatetasklist=(req,res)=>{
    Task.update({ listId:req.query.listId }, {
        where: {
          id:req.query.taskId
        }
      }).then(()=>res.send("sucess")).catch((err)=>console.log(err));   
}
