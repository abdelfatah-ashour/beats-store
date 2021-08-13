/* eslint-disable camelcase */
import React, {useEffect, useRef} from "react";
import Axios from "../../utilities/defaultAxios";
import {Toast} from "../../utilities/Toast";
import {useHistory} from "react-router-dom";
import {SUCCESS_ORDER} from "../../Redux/slices/cartSlice";
import {useDispatch} from "react-redux";

export default function PayPalCheckout({basicInfo, itemsList, totalAmount}) {
  const Router = useHistory();
  const dispatch = useDispatch();
  const btnCheckout = useRef();

  const handleSuccessOrder = details => {
    localStorage.setItem("cart", JSON.stringify([]));
    dispatch(SUCCESS_ORDER());
    Router.push("/");

    Toast(
      "info",
      "🚀 Transaction completed by " + details.payer.name.given_name
    );
  };

  useEffect(() => {
    /*
      1- in createOrder we send items data to Database with payment false.
      2- in onApprove we update state of checkout payment in database to true
        it's mean checkout payment is successfully.
    */

    // eslint-disable-next-line no-undef
    try {
      window?.paypal
        .Buttons({
          style: {
            color: "gold",
            shape: "rect",
            height: 40,
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "checkout payment for BOOM Store",
                  amount: {
                    currency_code: "USD",
                    value: totalAmount,
                  },
                },
              ],
            });
          },

          onApprove: async (data, actions) => {
            // This function captures the funds from the transaction.
            await Axios.post("/order/create", {
              ...basicInfo,
              itemsList,
              orderID: data.orderID,
              totalAmount,
            }).catch(error => {
              throw new Error(error.message);
            });

            // This function shows a transaction success message to your buyer.
            await actions.order
              .capture()
              .then(async details => {
                await Axios.post("/order/success", {
                  orderID: details.id,
                  transaction: true,
                })
                  .then(() => {
                    handleSuccessOrder(details);
                  })
                  .catch(error => {
                    throw new Error(error.message);
                  });
              })
              .catch(error => {
                throw new Error(error.message);
              });
          },

          onError: err => {
            throw new Error(err.message);
          },
        })
        .render(btnCheckout.current);
    } catch (error) {
      Toast("error", error.message);
    }

    return () => {
      return;
    };
  }, []);

  return <div ref={btnCheckout}></div>;
}
