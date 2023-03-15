const jwt =require('jsonwebtoken')
const CustomAPIError =require('../errors/custom-error')

const authenticationMiddleware = async (req, res, next)=>{
    //setup authentication so only the request with JWT can access the dashboard
    const authHeader =req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided',401)
    }

    const token =authHeader.split(' ')[1]
    //verify whether the token is actually valid
    try {
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        const {id, username} =decoded
        req.user ={id, username}
        next()
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this data',401)
    }
}

module.exports = authenticationMiddleware