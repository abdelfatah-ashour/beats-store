import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineMenu, AiOutlineLogin} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {GrCycle} from "react-icons/gr";
import {toggleSideCart} from "../../utilities/Side_cart";
import {GET_CART} from "../../Redux/slices/cartSlice";
import {LOGIN, LOGOUT} from "../../Redux/slices/authSlice";
import {IoMdLogOut} from "react-icons/io";
import {Toast} from "../../utilities/Toast";
import Axios from "../../utilities/defaultAxios";
import {get} from "js-cookie";
import "./Navbar.css";

export default function Index() {
  const dispatch = useDispatch();
  const {cart, auth} = useSelector(state => state);

  const handleDisplayMenu = () => {
    const menuList = document.getElementById("menu-list");
    menuList.classList.toggle("active-menu");
  };

  const getCart = JSON.parse(localStorage.getItem("cart"));
  const userInfo = get("user_info") && JSON.parse(get("user_info"));

  const handleLogout = async () => {
    Axios.get("/auth/logout")
      .then(({data}) => {
        dispatch(LOGOUT());
        Toast("success", data.message);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // update state of auth
  useEffect(() => {
    if (userInfo) {
      dispatch(LOGIN(userInfo));
    } else {
      dispatch(LOGOUT());
    }
    return () => {
      return null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // list cart
  useEffect(() => {
    if (getCart) {
      dispatch(GET_CART(getCart));
    }

    return () => {
      return null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo"></Link>
          <div className="container-nav" id="menu-list">
            <ul className="list-menu">
              <li>
                <Link to="/" className="active-link">
                  home
                </Link>
              </li>
              <li>
                <Link to="/products">products</Link>
              </li>
              <li>
                <Link to="/news">news</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <div className="list-option">
              <div>
                <Link to="/order/history">
                  <GrCycle />
                </Link>
              </div>
              <div
                className="icon-cart"
                onClick={toggleSideCart}
                data-cart={cart.length}
              >
                <FiShoppingCart />
              </div>

              {!auth.isLogin && (
                <div className="login">
                  <Link to="/login">
                    <AiOutlineLogin />
                  </Link>
                </div>
              )}

              {auth.isLogin && (
                <button className="logout" type="button" onClick={handleLogout}>
                  <IoMdLogOut />
                </button>
              )}
            </div>
          </div>
          <div className="icon-menu" onClick={() => handleDisplayMenu()}>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
