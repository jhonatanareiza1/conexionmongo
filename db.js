import mongoose, { Mongoose } from "mongoose";

const DB_URI = "mongodb+srv://jhonatanAreiza:<Popeyegordo070223>@cluster0.mqhb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB_URI)
.then(()=>{
    console.log("Conectado a mongodb");
})
.catch((err)=>{
    console.error("no se conecto por error de conexion");
})