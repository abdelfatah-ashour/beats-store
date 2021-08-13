const {Schema, model} = require("mongoose");

const schemaProduct = new Schema(
  {
    name: String,
    category: String,

    material: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    isSold: {
      type: Number,
      default: 0,
    },
    productImages: Array,
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  {timestamps: true}
);

module.exports = model("Product", schemaProduct);
