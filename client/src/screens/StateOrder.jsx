import React, {useEffect, useState} from "react";
import SEO from "../components/SEO/SEO";
import {VscServerProcess} from "react-icons/vsc";
import {GiRecycle} from "react-icons/gi";
import {IoIosBicycle} from "react-icons/io";
import {GiTrophyCup} from "react-icons/gi";
import {useParams} from "react-router-dom";
import Axios from "../utilities/defaultAxios";
import "../assets/css/StateOrder.css";

export default function StateOrder() {
  const {orderId} = useParams();
  const [order, setOrder] = useState(false);

  const fetchStateOrders = async () => {
    await Axios.get("/order/history", {params: {orderId}})
      .then(({data}) => setOrder(data.message))
      .catch(() => setOrder(false));
  };

  useEffect(async () => {
    await fetchStateOrders();
    return () => {
      return setOrder(false);
    };
  }, [orderId]);

  return (
    <SEO title="State Order">
      <div className="state-order" style={{width: "100%", minHeight: "100vh"}}>
        {order &&
          order.map((state, i) => {
            return (
              <div className="parent-order" key={i}>
                <div className="current-state">
                  <div
                    state="process-confirmation"
                    className={
                      state.stateOrder === "processing" ? "activeState" : ""
                    }
                  >
                    <VscServerProcess />
                  </div>
                  <span
                    className={
                      state.stateOrder === "tracking" ? "activeSpaceStep" : ""
                    }
                  ></span>
                  <div
                    state="receive-tracking"
                    className={
                      state.stateOrder === "tracking" ? "activeState" : ""
                    }
                  >
                    <GiRecycle />
                  </div>
                  <span
                    className={
                      state.stateOrder === "shipped" ? "activeSpaceStep" : ""
                    }
                  ></span>
                  <div
                    state="shipped"
                    className={
                      state.stateOrder === "shipped" ? "activeState" : ""
                    }
                  >
                    <IoIosBicycle />
                  </div>
                  <span
                    className={
                      state.stateOrder === "delivery" ? "activeSpaceStep" : ""
                    }
                  ></span>
                  <div
                    state="delivery"
                    className={
                      state.stateOrder === "delivery" ? "activeState" : ""
                    }
                  >
                    <GiTrophyCup />
                  </div>
                </div>
                <div className="details-order">
                  <span>ID : #</span>
                  <span>
                    Total Price : <strong>1440</strong>$
                  </span>
                  <span>
                    State Order :{" "}
                    <strong style={{textTransform: "uppercase"}}>
                      shipped
                    </strong>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </SEO>
  );
}
