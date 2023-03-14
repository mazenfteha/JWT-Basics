// *logic:*
//check username, password in post(login) request
//if exist create new JWT
//send back to front-end
//setup authentication so only the request with JWT can access the dashboard

const jwt =require('jsonwebtoken')
const CustomAPIError =require('../errors/custom-error')

const login =async (req,res)=>{
    //check username, password in post(login) request
    //check in the controller
    const {username,password} =req.body
    if(!username || !password){
        throw new CustomAPIError('please provide email and password',400)
    }

    //create demo id to send into payload
    const id =new Date().getDate()

    //if exist create new JWT
    const token =jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token})
}

const dashboard = async(req,res)=>{
    //setup authentication so only the request with JWT can access the dashboard
    const authHeader =req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided',401)
    }

    const token =authHeader.split(' ')[1]
    //verify whether the token is actually valid
    try {
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        const luckNumber =Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${decoded.username}`,secret:`Here is your authorized data, you r lucky number
        is ${luckNumber}`})
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this data',401)
    }
}

module.exports ={
    login,
    dashboard
}
