const Order = require("../models/order-model");
const Product = require("../models/product-model");

async function createOrder(req, res) {
  try {
    const {fullName, phoneNumber, Address, itemsList, orderID, totalAmount} =
      req.body;
    if (!itemsList) throw new Error("please select at least one item");

    /* update init QTY of product */
    for (let i = 0; i < itemsList.length; i++) {
      const item = itemsList[i];
      const oneProduct = await Product.findOne({_id: item._id});
      if (oneProduct.qty >= item.currentQty) {
        oneProduct.qty = oneProduct.qty - item.currentQty;
        await oneProduct.save();
      } else {
        return res.status(400).json({message: "❌ item is over qty"});
      }
    }

    const newOrder = new Order({
      userId: "610557ea49048704f4c90c4a",
      fullName,
      phoneNumber,
      Address,
      itemsList,
      orderID,
      totalAmount,
    });

    await newOrder.save(error => {
      if (error) throw new Error(error.message);
      return res.status(201).json({message: "🦄 order is created"});
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function SuccessOrder(req, res) {
  try {
    const {orderID, transaction} = req.body;

    const oenOrder = await Order.findOne({orderID: orderID});
    oenOrder.transaction = transaction;

    await oenOrder.save(error => {
      if (error) throw new Error(error.message);
      return res.status(200).json({
        message: "completed order successfully",
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function updateStateOrder(req, res) {
  try {
    await Order.findByIdAndUpdate(req.params.orderID, {
      stateOrder: +req.params.newState,
    });
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

module.exports = {createOrder, SuccessOrder, updateStateOrder};
