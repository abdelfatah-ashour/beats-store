const Product = require("../models/product-model");
const {validProduct} = require("../utilities/validation");

async function createNewProduct(req, res) {
  try {
    const {
      name,
      category,
      brand,
      color,
      material,
      price,
      productType,
      qty,
      size,
      productImages,
    } = req.body;

    // // check if inputs product is valid
    const {error} = validProduct({...req.body});

    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }

    const createProduct = new Product({
      name,
      category,
      brand,
      color,
      material,
      price,
      productType,
      qty,
      size,
      productImages: [...productImages],
    });

    await createProduct.save(error => {
      if (error) {
        throw new Error(error);
      }
    });

    return res.status(201).json({message: "successfully uploaded product"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

async function getProduct(req, res) {
  try {
    const {category, productType, price, size, brand, material, color} =
      req.query;

    await Product.find({
      category: category || {$gt: ""},
      productType: productType || {$gt: ""},
      price: price || {$gt: 0},
      size: size || {$gt: 0},
      brand: brand || {$gt: ""},
      material: material || {$gt: ""},
      color: color || {$gt: ""},
      isValid: true,
    })
      .then(items => {
        return res.status(200).json({message: items});
      })
      .catch(error => {
        throw new Error(error);
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createNewProduct,
  getProduct,
};
