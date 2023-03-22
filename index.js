const express=require("express")
const cors=require("cors")
const app=express()
const port=3400
const {routerget}=require("./server/routers/routers")
app.use(cors())
app.use(express.json())
app.use("/",routerget)










app.listen(port,()=>console.log("server is runing"))