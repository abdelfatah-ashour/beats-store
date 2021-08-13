import React, {useCallback, useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import {addToCart} from "../utilities/crud_cart";
import {addToWishlist} from "../utilities/crud_wishlist";
import {AiOutlineHeart} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import HeadPage from "../components/HeadPage/HeadPage";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/ViewProduct.css";

export default function ViewProduct() {
  const dispatch = useDispatch();
  const {productName, productId} = useParams();
  const [viewProduct, setViewProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isSelected, setIsSelected] = useState([]);
  const {allProducts} = useSelector(state => state);
  const route = useHistory();

  const [selected, setSelected] = useState({
    size: null,
    color: null,
    material: null,
  });

  const handleActiveImg = imgSrc => {
    const mainImg = document.getElementById("mainImage");
    mainImg.src = imgSrc;
  };

  const handleSelect = useCallback(
    e => {
      setSelected({
        ...selected,
        [e.target.name]: e.target.value,
      });

      const result = products.filter(item => {
        return (
          item.size ===
            (e.target.name === "size" ? +e.target.value : +selected.size) &&
          item.material ===
            (e.target.name === "material"
              ? e.target.value
              : selected.material) &&
          item.color ===
            (e.target.name === "color" ? e.target.value : selected.color)
        );
      });

      setIsSelected(result);
    },
    [selected, products]
  );

  useEffect(() => {
    function fetchOneProduct(name) {
      try {
        const result = allProducts.products.filter(item => {
          return item._id === productId;
        });
        setProducts(allProducts.products.filter(item => item.name === name));
        setViewProduct(result.length > 0 ? result[0] : null);
        if (result.length === 0) route.push("/products");
      } catch (error) {
        alert(error.message);
      }
    }
    fetchOneProduct(productName);
    return () => {
      return;
    };
  }, [allProducts.products, productId, productName, route]);

  return (
    <SEO title="View Product">
      <HeadPage direction="products" />
      <div className="view-product">
        {viewProduct && (
          <>
            <div className="container-images">
              <div className="wrapper-img">
                <img
                  src={process.env.API + "/" + viewProduct?.productImages[0]}
                  alt="main view product"
                  id="mainImage"
                  loading="lazy"
                />
              </div>
              <div className="wrapper-thumbs">
                {viewProduct?.productImages.map((image, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={process.env.API + "/" + image}
                        alt={image}
                        loading="lazy"
                        onClick={() =>
                          handleActiveImg(`${process.env.API}/${image}`)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="main-filter-view">
              <h3 style={{color: "#fc846b"}}>{viewProduct?.name}</h3>
              <div className="one-filter">
                <div>Price</div>
                <div>
                  {isSelected.length > 0 ? (
                    <p> {isSelected[0].price} $</p>
                  ) : (
                    "unavailable"
                  )}
                </div>
              </div>

              {/* sizes */}
              <div className="one-filter">
                <div>size</div>
                <div>
                  {[2.5, 3.5, 13.5, 12.5].map((line, i) => {
                    return (
                      <React.Fragment key={i}>
                        <label
                          htmlFor={`${line}`}
                          className={
                            selected.size === line.toString() ? "active" : ""
                          }
                        >
                          {line}mm
                        </label>
                        <input
                          type="radio"
                          name="size"
                          id={`${line}`}
                          value={line}
                          hidden
                          onClick={handleSelect}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* material */}
              <div className="one-filter">
                <div>material</div>
                <div>
                  {["silicon", "plastic", "fiber"].map((material, i) => {
                    return (
                      <React.Fragment key={i}>
                        <label
                          htmlFor={`${material}`}
                          className={
                            selected.material === material.toLowerCase()
                              ? "active"
                              : ""
                          }
                        >
                          {material}
                        </label>
                        <input
                          type="radio"
                          name="material"
                          id={`${material}`}
                          value={material}
                          hidden
                          onClick={handleSelect}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              {/* colors */}
              <div className="one-filter">
                <div>color</div>
                <div>
                  {["black", "red", "white", "gray", "blue"].map((color, i) => {
                    return (
                      <React.Fragment key={i}>
                        <label
                          htmlFor={`${color}`}
                          className={
                            selected.color === color.toLowerCase()
                              ? "active"
                              : ""
                          }
                          style={{textTransform: "uppercase"}}
                        >
                          {color}
                        </label>
                        <input
                          type="radio"
                          name="color"
                          id={`${color}`}
                          value={color}
                          hidden
                          onClick={handleSelect}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            {isSelected.length > 0 && (
              <div className="wrapper-options">
                <Link
                  to={
                    "/order/checkout?productId=" + isSelected[0]._id + "&qty=1"
                  }
                  className="checkout"
                >
                  checkout
                </Link>
                <button
                  className="wishlist"
                  onClick={() => addToWishlist(isSelected[0])}
                >
                  <AiOutlineHeart />
                  <span>add to wishlist</span>
                </button>
                <button
                  pop-up="add to wishlist"
                  className="wishlist"
                  onClick={() => addToCart(isSelected[0], dispatch)}
                >
                  <FiShoppingCart />
                  <span>add to cart</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </SEO>
  );
}
