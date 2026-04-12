const buyModel = require("../model/buyModel")

const AddBuyer =  async ( req , res) => {
    try {
        const { FullName , Phone , Street , City , State , Zip  , Product ,  ProductImage , Total , Payment } = req.body

        const buyerData = new buyModel({
            FullName , Phone , Street , City , State , Zip , Product ,  ProductImage , Total , Payment
        })

        await buyerData.save()
        res.status(200).send("Buyer Details Added!")
        console.log("BODY ", req.body);

    }

    catch(err) {
        res.status(500).send(err.message)
    }
}


const getBuyer = async (req , res) => {
    try {
        const BuyerList = await buyModel.find()
        res.status(200).send(BuyerList)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { AddBuyer , getBuyer}