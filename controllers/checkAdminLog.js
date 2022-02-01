const userSpecify = require('../controllers/adminLogin')

exports.check = (req,res,next)=>{
        if (userSpecify.Id>0) {
            next()
        }else{
            res.render('adminRegister')
        }
}