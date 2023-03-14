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
        throw new CustomAPIError('please provide email and password')
    }

    //create demo id to send into payload
    const id =new Date().getDate()

    //if exist create new JWT
    const token =jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token})
}

const dashboard = async(req,res)=>{
    const luckNumber =Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Mazen`,secret:`Here is your authorized data, you r lucky number
    is ${luckNumber}`})
}

module.exports ={
    login,
    dashboard
}
