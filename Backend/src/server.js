import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import path from "path"
import dotenv from 'dotenv';
dotenv.config();  // Loads variables from .env
const app = express()

const __dirname = path.resolve()
if(process.env.NODE_ENV !== "production"){
app.use(cors(
    {origin:"http://localhost:5173",}
))} //allow req from  anywhere 
app.use(express.json()) //middleware add before routes (to use req.body)
////////////////////middleware






app.use((req,res,next)=>{
    console.log(`meth:${req.method}, req:${req.url}`)
    next()
})


///////////////////middleware
app.use('/api/notes',notesRoutes)//send res back



if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../Frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
})}

connectDB().then(()=>{
app.listen(5001,()=>{
    console.log('server listening at 5001');
    
})
})
