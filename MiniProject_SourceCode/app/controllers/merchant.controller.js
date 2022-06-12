const models = require('/Users/satya/Documents//DiBimbing/MiniProject3/models/index')

async function deleteMerchant(req, res) {
    models.Merchant.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Merchant account has been deleted' })
}

module.exports = {
    deleteMerchant
}