import express from "express";
import path  from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";
import router from "./routes/index"

dotenv.config();

const server = express();

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,"../public")));

//routes

server.use(router);

server.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT ${process.env.PORT}`)
});