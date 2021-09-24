import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GrSecure } from "react-icons/gr";
import { FaShoppingBasket } from "react-icons/fa";
import { handleCalcTotalAmount, removeFromCart } from "../utilities/crud_cart";
import { AiFillDelete } from "react-icons/ai";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, auth } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(true);
  };

  useEffect(() => {
    const result = handleCalcTotalAmount(cart);
    setTotalAmount(result);
    return () => {
      return;
    };
  }, [cart]);

  return (
    <SEO title="Cart">
      <div className="cart">
        <h3>All items in Cart</h3>
        {cart.map((item) => {
          return (
            <div className="one-item-cart" key={item._id}>
              <div className="img-item-cart">
                <img
                  src={`${process.env.REACT_APP_API}/${item.productImages[0]}`}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="details-item">
                <span>name : {item.name}</span>
                <span>Price : {item.price}</span>
                <span>QTY : {item.currentQty}</span>
                <span>Total : {item.price * item.currentQty}</span>
              </div>
              <div className="option">
                <div className="edit">
                  <Link to={`/cart/${item.currentQty}/${item._id}`}>
                    <FaEdit />
                  </Link>
                </div>
                <div
                  className="edit"
                  onClick={() => removeFromCart(item._id, dispatch)}
                >
                  <AiFillDelete />
                </div>
              </div>
            </div>
          );
        })}
        {cart.length > 0 && (
          <div className="process-checkout">
            <div>
              Total : <strong>{totalAmount}.00</strong>$
            </div>
            <div>
              {!checked && (
                <div className="btn-checkout" onClick={handleChecked}>
                  checkout
                </div>
              )}
              {checked && auth.isLogin && (
                <span>
                  <GrSecure />
                  you are un authorized .. please <Link to="login">Login</Link>
                </span>
              )}
              {checked && !auth.isLogin && (
                <Link to="/order/checkout">checkout</Link>
              )}
            </div>
          </div>
        )}
        {cart.length === 0 && (
          <div
            style={{
              width: "auto",
              justifySelf: "center",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <FaShoppingBasket /> Empty cart
          </div>
        )}
      </div>
    </SEO>
  );
}
