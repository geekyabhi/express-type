const router=require('express').Router()

router.get('/login',async(req,res)=>{
    res.send({
        message:'Login route'
    })
})

module.exports=router