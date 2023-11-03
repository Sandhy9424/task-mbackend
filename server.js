import express from "express";
import cors from "cors";
import { addUser,addList,addTask,getuserbyemail, gettaskbylistid, updatetasklist, destroytask } from "./controller.js";
const app=express();




app.use(express.json())
app.use(cors())

app.post("/adduser",addUser)

app.post("/addlist",addList)

app.post("/addtask",addTask)
app.get("/getuserbyemail",getuserbyemail)
app.get("/gettaskbylistid",gettaskbylistid)
app.put("/updatetask",updatetasklist)
app.delete("/deletetask",destroytask)
app.listen(4000,()=>console.log("Srerver at localhost:4000"))