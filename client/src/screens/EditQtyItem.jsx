import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import {editQty} from "../utilities/crud_cart";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/editQty.css";

export default function EditQtyItem() {
  const dispatch = useDispatch();
  const Router = useHistory();
  const [qty, setQty] = useState(0);
  const {itemId, currentQty} = useParams();
  const allItems = JSON.parse(localStorage.getItem("cart"));
  const handleDecQty = () => setQty(qty - 1);
  const handleIncQty = () => setQty(qty + 1);

  const handleEditQty = (id, newQty, dispatch) => {
    editQty(id, newQty, dispatch);
    Router.goBack();
  };

  useEffect(() => {
    setQty(+currentQty);
    return () => {
      return;
    };
  }, [currentQty]);

  console.log(process.env.API);

  return (
    <SEO title={itemId.toString()}>
      <div className="editQtyItem">
        {allItems &&
          allItems
            .filter(item => {
              return item._id === itemId;
            })
            .map(oenItem => {
              return (
                <React.Fragment key={oenItem._id}>
                  <div className="wrapper-Img" key={oenItem._id}>
                    <img
                      src={`${process.env.API}/${oenItem.productImages[0]}`}
                      alt="productImages"
                      loading="lazy"
                    />
                  </div>
                  <div className="control-change-qty">
                    <span>current QTY : {qty}</span>
                    <div>
                      <button onClick={handleDecQty} disabled={qty === 1}>
                        -
                      </button>
                      <span>{qty}</span>
                      <button
                        onClick={handleIncQty}
                        disabled={oenItem.qty <= qty}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleEditQty(oenItem._id, qty, dispatch)}
                    >
                      confirm
                    </button>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </SEO>
  );
}
