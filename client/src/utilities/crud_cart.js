import {GET_CART} from "../Redux/slices/cartSlice";
import {Toast} from "./Toast";

function addToCart(item, dispatch) {
  try {
    if (!item) throw new Error("👻 please select at least one item");

    const getCart = JSON.parse(localStorage.getItem("cart"));
    // check if any cart any already stored
    if (!getCart) {
      localStorage.setItem("cart", JSON.stringify([{...item, currentQty: 1}]));
      dispatch(GET_CART([{...item, currentQty: 1}]));
      Toast("success", "🦄 added to cart");
    } else {
      // there cart founded
      // check if item already added
      const isItem = getCart.filter(oneItem => {
        return oneItem._id === item._id;
      });

      if (isItem.length > 0) {
        Toast("warning", "😹 item already in cart");
      } else {
        let newItemAdded = [...getCart, {...item, currentQty: 1}];
        localStorage.setItem("cart", JSON.stringify(newItemAdded));
        dispatch(GET_CART(newItemAdded));
        Toast("success", "🦄 added to cart");
      }
    }
  } catch (error) {
    Toast("error", error.message);
  }
}

function removeFromCart(id, dispatch) {
  try {
    if (!id) throw new Error("👻 please select at least one item");
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.filter(item => item._id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch(GET_CART(newCart));
      Toast("success", "👻 delete item");
    } else {
      Toast("info", "👻 item not found in cart");
    }
  } catch (error) {
    Toast("error", error.message);
  }
}

function editQty(id, newQty, dispatch) {
  try {
    if (!id) throw new Error("👻 please select at least one item");
    let cart = JSON.parse(localStorage.getItem("cart"));
    let oldCart = cart.filter(item => item._id !== id);
    let oneItem = cart.filter(item => item._id === id);
    oneItem[0].currentQty = newQty;
    let newCart = [...oldCart, ...oneItem];
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch(GET_CART(newCart));
    Toast("success", "🦄 Edited QTY");
  } catch (error) {
    Toast("error", error.message);
  }
}

const handleCalcTotalAmount = item => {
  const result = item.reduce((total, product) => {
    return total + product.price * product.currentQty;
  }, 0.0);
  return result;
};

export {addToCart, removeFromCart, editQty, handleCalcTotalAmount};
