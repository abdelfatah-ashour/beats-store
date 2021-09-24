import React from "react";
import { toggleSideCart } from "../../utilities/Side_cart";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../utilities/crud_cart";
import "./SideCard.css";

export default function SideCart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="side-cart" id="sideCart">
      <div className="head-side-cart">
        <button onClick={toggleSideCart} className="btn-close">
          X
        </button>
        <h4>cart</h4>
      </div>
      <div className="container-items">
        {cart.map((oneItem, i) => {
          return (
            <div className="one-item" key={i}>
              <div className="img-item">
                <img
                  src={`${process.env.REACT_APP_API}/${oneItem.productImages[0]}`}
                  alt="productImages"
                  loading="lazy"
                />
              </div>
              <div className="info-item">
                <h6>{oneItem.name}</h6>
                <div className="edit-item">
                  <button
                    pop-up="Delete"
                    onClick={() => removeFromCart(oneItem._id, dispatch)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {cart.length === 0 && (
          <small style={{ textAlign: "center", width: "100%" }}>
            cart is empty
          </small>
        )}
      </div>
    </div>
  );
}
