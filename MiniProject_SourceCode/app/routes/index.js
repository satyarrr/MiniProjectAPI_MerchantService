const express = require('express')
const loginRoute = require('../controllers/login.controller')
const productRoute = require('../controllers/product.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const registerRoute = require('../controllers/register.controller')
const router = express.Router()
const {runValidation,validationProduct,validationMerchant} = require('../middlewares/validation/index')
const merchantRoute = require('../controllers/merchant.controller')
router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
}) 

router.post('/login', loginRoute.login)
router.post('/register',validationMerchant,runValidation, registerRoute.insertMerchant)
router.delete('/merchant/:id', authMiddleware.isAuthenticate, merchantRoute.deleteMerchant)

router.get('/product', authMiddleware.isAuthenticate, productRoute.listProduct)
router.post('/product', authMiddleware.isAuthenticate,validationProduct,runValidation ,productRoute.insertProduct)
router.put('/product/:id', authMiddleware.isAuthenticate, productRoute.updateProduct)
router.delete('/product/:id', authMiddleware.isAuthenticate, productRoute.deleteProduct)


module.exports = router