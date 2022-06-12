const models = require('/Users/satya/Documents/DiBimbing/MiniProject3/models/index')

function insertMerchant(req,res){
    let form = req.body
    models.Merchant.create(form)

    return res.send({message : 'Data telah dibuat', data : form})
}


module.exports={
    insertMerchant,
}