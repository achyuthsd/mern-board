import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
const app = express()


app.use(cors()) //allow req from  anywhere 
app.use(express.json()) //middleware add before routes (to use req.body)
////////////////////middleware


app.use(rateLimiter)

app.use((req,res,next)=>{
    console.log(`meth:${req.method}, req:${req.url}`)
    next()
})


///////////////////middleware
app.use('/api/notes',notesRoutes)//send res back




connectDB().then(()=>{
app.listen(5001,()=>{
    console.log('server listening at 5001');
    
})
})
