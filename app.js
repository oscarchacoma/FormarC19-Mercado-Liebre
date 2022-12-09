const express = require ("express");
const path = require("path");
const app = express(); 

app.use(express.static("public")); 


app.listen(3030, ()=> console.log("El servidor está funcionando en el puerto 3030"))//liten recive dos parametros, el puerto y una funcion colback

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/home.html"))
})