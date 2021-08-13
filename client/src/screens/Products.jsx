import React, {useEffect} from "react";
import HeadPage from "../components/HeadPage/HeadPage.jsx";
import SpecificFilter from "../components/SpecificFilter/SpecificFilter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProduct} from "../Redux/slices/AllProductsSlice";
import {slice} from "lodash";
import {AiOutlineHeart} from "react-icons/ai";
import {HiOutlineFilter} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import {Link} from "react-router-dom";
import SEO from "../components/SEO/SEO.jsx";
import {API} from "../utilities/Keys.json";
import "../assets/css/Products.css";

export default function Products() {
  const {allProducts, filter} = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(allProducts, filter);
  useEffect(() => {
    dispatch(fetchAllProduct());

    return () => {
      return null;
    };
  }, [dispatch]);

  const handleToggleFilter = () => {
    const filterElem = document.getElementById("filter");
    filterElem.classList.toggle("toggleFilter");
  };

  return (
    <SEO title="Products">
      <HeadPage direction="products" />
      <div className="products">
        <button className="open-filter" onClick={handleToggleFilter}>
          <HiOutlineFilter />
        </button>
        <SpecificFilter />
        <div className="layout-products">
          <div className="main-products">
            {filter.length === 0 &&
              slice(allProducts.products, 0, 15).map((product, i) => {
                return (
                  <div key={i} className="one-product">
                    <div className="option">
                      <div>
                        <AiOutlineHeart />
                      </div>
                      <div>
                        <Link
                          to={`/all-products/${product.category.toLowerCase()}/${
                            product.name
                          }/${product._id}`}
                        >
                          <BiSearch />
                        </Link>
                      </div>
                    </div>
                    <div className="wrapper-img" style={{marginBottom: "1rem"}}>
                      <img
                        src={API + "/" + product.productImages[0]}
                        alt={product.productImages[0]}
                      />
                      <div className="overlay"></div>
                    </div>
                    <div
                      className="wrapper-content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h3 style={{marginBottom: "1rem"}}>{product.name}</h3>
                      <h6 style={{marginBottom: "1rem"}}>
                        {product.price}
                        <strong>$</strong>
                      </h6>
                    </div>
                  </div>
                );
              })}

            {filter.length > 0 &&
              slice(filter, 0, 15).map((product, i) => {
                return (
                  <div key={i} className="one-product">
                    <div className="option">
                      <div>
                        <AiOutlineHeart />
                      </div>
                      <div>
                        <Link
                          to={`/all-products/${product.category.toLowerCase()}/${
                            product.name
                          }/${product._id}`}
                        >
                          <BiSearch />
                        </Link>
                      </div>
                    </div>
                    <div className="wrapper-img" style={{marginBottom: "1rem"}}>
                      <img
                        src={API + "/" + product.productImages[0]}
                        alt={product.productImages[0]}
                      />
                      <div className="overlay"></div>
                    </div>
                    <div
                      className="wrapper-content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h3 style={{marginBottom: "1rem"}}>{product.name}</h3>
                      <h6 style={{marginBottom: "1rem", fontSize: "18px"}}>
                        {product.price}
                        <strong>$</strong>
                      </h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </SEO>
  );
}
