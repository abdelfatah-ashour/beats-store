import {Toast} from "./Toast";

async function addToWishlist(item) {
  try {
    if (!item) throw new Error("👻 please select at least one item");
    const getWishlist = JSON.parse(localStorage.getItem("wishlist"));
    // check if any Wishlist any already stored
    if (!getWishlist) {
      localStorage.setItem("wishlist", JSON.stringify([item]));
      Toast("success", "🦄 added to Wishlist");
    } else {
      // there wishlist founded
      // check if item already added
      const isItem = getWishlist.filter(oneItem => {
        return oneItem === item._id;
      });

      if (isItem) {
        Toast("warning", "😹 item already in Wishlist");
      } else {
        let newItemAdded = getWishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(newItemAdded));
        Toast("success", "🦄 added to Wishlist");
      }
    }
  } catch (error) {
    Toast("error", error.message);
  }
}

export {addToWishlist};
