const {Schema, model} = require("mongoose");

const orderSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    itemsList: {
      type: [Object],
      required: true,
    },
    orderID: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    transaction: {
      type: Boolean,
      default: false,
    },
    stateOrder: {
      type: Number,
      enum: ["processing", "tracking", "shipped", "delivery"], // it's main 0 created order / 1 pick up / 2 shipped / 3 delivered / 4 complete
      default: "processing",
    },
  },
  {timestamps: true}
);

module.exports = model("Order", orderSchema);
