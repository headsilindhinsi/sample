const express = require("express");
const productRouter = express.Router();

const productModel = require("../model/productModel"); // ✅ FIX
const { addProduct, getProduct, removeProduct, updateProduct } = require("../controller/productController");

productRouter.post("/add", addProduct);
productRouter.get("/products", getProduct);
productRouter.delete("/remove/:id", removeProduct);
productRouter.put("/update/:id", updateProduct);

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = productRouter;
