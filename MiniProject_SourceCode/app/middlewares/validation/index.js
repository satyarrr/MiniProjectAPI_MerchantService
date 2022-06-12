const{check,validationResult} = require('express-validator');
    
exports.runValidation=(req,res,next) => {
    const errors=validationResult(req)
        if(!errors.isEmpty()){
        return res.status(404).json({
        status:false,
        message:errors.array()[0].msg
        })
        }
    next()
}
exports.validationProduct=[
    check('name','name must be at least 3 charachters and maximum is 50 caharachters').notEmpty().isLength({ min:3 }).isLength({ max:50 }),
    check('quantity','quantity must be at least 1').notEmpty().isNumeric({ min:1 }),
    check('price','price field cant empty').notEmpty().isDecimal({ min:10000 }).withMessage('minimum is 10000 and must be decimal')
]

exports.validationMerchant=[
    check('name','name will be username to login and cant empty').notEmpty().isLength({ min:3, max:50 }).withMessage('name minimum 3 and maximal 50 caharcter'),
    check('password','password cant empty').notEmpty().isLength({ min:6 }).withMessage('at least 6 characters'),
    check('address','address field cant empty').notEmpty(),
    check('join_date','join_date field cant empty').notEmpty() .isISO8601('yyyy-mm-dd').toDate().withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss'),
    check('phone_number','phone_number file cant empty').notEmpty().isNumeric().withMessage('using numeric'),
]