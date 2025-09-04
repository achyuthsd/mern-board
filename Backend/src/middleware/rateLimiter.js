import ratelimit from "../config/upstash.js"

const rateLimiter = async(req,res,next)=>{

try {
    
    const {success} = await ratelimit.limit("my-limit-key")

if(!success){
    return res.status(429).json({msg:"too many req"})
}
next()

} catch (error) {
    console.log("rate lim err")
    next(error)
}


}

export default rateLimiter