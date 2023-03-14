
const login =async (req,res)=>{
    res.send('Fake Login/Register/Signup Route')
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
