import React, {useCallback, useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {RiSecurePaymentFill} from "react-icons/ri";
import {BiUserPin} from "react-icons/bi";
import {validCheckout} from "../utilities/valid-checkout";
import {useSelector} from "react-redux";
import PayPalCheckout from "../components/PayPalCheckout/PayPalCheckout";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/CreateOrder.css";

export default function CreateOrder() {
  const [isValid, setIsValid] = useState(false);
  const [product, setProduct] = useState(null);
  const {allProducts} = useSelector(state => state);
  const route = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const handleFetchOneProduct = useCallback(
    id => {
      const result = allProducts.products.filter(item => {
        return item._id === id;
      });
      if (result.length > 0) {
        setProduct(result);
      } else {
        route.push("/products");
      }
    },
    [query.get("productId")]
  );

  const types = {
    basic: "BASIC",
    checkout: "CHECKOUT",
  };

  const [basicInfo, setBasicInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const [activeStep, setActiveStep] = useState(types.basic);

  const handleActiveStep = currentStep => {
    setActiveStep(currentStep);
  };

  const handleBasicInfo = async e => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });

    // get current input and old inputs
    const result = await validCheckout({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
    setIsValid(result);
  };

  useEffect(async () => {
    await handleFetchOneProduct(query.get("productId"));
    return () => {};
  }, [query.get("productId")]);

  return (
    <SEO title="Processing Checkout">
      <div className="create-order">
        <div className="stepper">
          <div className="head-of-stepper">
            <div className="activeStep" pop-up="user-info">
              <BiUserPin />
            </div>
            <span
              className={activeStep === types.checkout ? "activeStep" : ""}
            ></span>
            <div
              className={activeStep === types.checkout ? "activeStep" : ""}
              pop-up="payment"
            >
              <RiSecurePaymentFill />
            </div>
          </div>
          <div className="body-stepper">
            {/* basic info */}
            {activeStep === types.basic && (
              <>
                <div>
                  <label htmlFor="fullName">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    onChange={handleBasicInfo}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleBasicInfo}
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="tel"
                    name="address"
                    id="address"
                    onChange={handleBasicInfo}
                  />
                </div>

                <div className="btn-dir">
                  <button
                    disabled={!isValid}
                    onClick={() => handleActiveStep(types.checkout)}
                  >
                    next
                  </button>
                </div>
              </>
            )}

            {/* paypal */}
            {activeStep === types.checkout && (
              <div>
                <PayPalCheckout
                  basicInfo={basicInfo}
                  itemsList={product}
                  totalAmount={product[0]?.price}
                />
                <div className="btn-dir">
                  <button onClick={() => handleActiveStep(types.basic)}>
                    back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SEO>
  );
}
