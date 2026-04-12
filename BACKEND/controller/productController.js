const productModel = require("../model/productModel")

const addProduct = async(req , res) => {
    try{
        const { img , category ,  desc , price , type} = req.body
        const productData = productModel({
            img , category , desc , price , type
        })
        await productData.save()
        res.status(200).send("product added")
    }
    catch(err) {
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const Product = require("../model/productModel");

const getProduct = async(req , res) => {
    try{
        const { category } = req.query;

        let products;

        if (category ) {
         products = await Product.find({ category : category });
        } else {
            products = await Product.find();
        }

        res.json(products);
        
        } catch(error) { 
            res.status(500).json({ message : error.message})
        }
    }


    const removeProduct = async ( req , res) => {
        try { 
            await productModel.findByIdAndDelete(req.params.id)
            res.status(200).send("Product Removed!")
        }
        catch(err) {
            res.status(404).send(`Error Name  : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const updateProduct = async (req , res) => {
        try {
            const updatedProduct = await productModel.findByIdAndUpdate(req.params.id , req.body , { new : true})
            res.status(200).send(updatedProduct)
        }
        catch(err) {
            res.status(404).send(`error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

module.exports = { addProduct , getProduct , removeProduct , updateProduct}