import React, {useEffect, useState} from "react";
import Axios from "../utilities/defaultAxios.js";
import {Link} from "react-router-dom";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/historyOrder.css";

export default function HistoryOrders() {
  const [orders, setOrders] = useState(false);

  const fetchOrder = async () => {
    await Axios.get("/order")
      .then(({data}) => setOrders(data.message))
      .catch(error => {
        setOrders(false);
        console.timeLog(error.message);
      });
  };

  useEffect(() => {
    fetchOrder();
    return () => {
      setOrders(false);
    };
  }, []);

  return (
    <SEO title="History Orders">
      <div className="history">
        <h4>History of all Orders</h4>

        {orders && orders.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>State Order</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, i) => {
                  return (
                    <tr key={i}>
                      <td># {order.name}</td>
                      <td>{order.statusOrder}</td>
                      <td>
                        <Link to={`/order/history/${order._id}`}>Details</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        {orders && orders.length === 0 && (
          <div className="alert">⚠ order list is empty</div>
        )}
      </div>
    </SEO>
  );
}
