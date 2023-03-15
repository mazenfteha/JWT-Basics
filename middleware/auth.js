const jwt =require('jsonwebtoken')
const { UnauthenticatedError } =require('../errors')

const authenticationMiddleware = async (req, res, next)=>{
    //setup authentication so only the request with JWT can access the dashboard
    const authHeader =req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
    }

    const token =authHeader.split(' ')[1]
    //verify whether the token is actually valid
    try {
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        const {id, username} =decoded
        req.user ={id, username}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this data')
    }
}

module.exports = authenticationMiddleware