// eslint-disable-next-line react-hooks/exhaustive-deps
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home";
import Services from "./screens/Services";
import Footer from "./components/Footer/Footer";
import About from "./screens/About";
import Products from "./screens/Products";
import News from "./screens/News.jsx";
import Contact from "./screens/Contact";
import Dashboard from "./screens/Dashboard.jsx";
import UploadProduct from "./screens/UploadProduct.jsx";
import ViewProduct from "./screens/ViewProduct";
import SideCart from "./components/SideCart/SideCart";
import Cart from "./screens/Cart";
import EditQtyItem from "./screens/EditQtyItem.jsx";
import CreateOrder from "./screens/CreateOrder";
import HistoryOrders from "./screens/HistoryOrders";
import PageNotFound from "./screens/PageNotFound";
import StateOrder from "./screens/StateOrder.jsx";
import ViewOneNews from "./screens/ViewOneNews";
import {useSelector} from "react-redux";
import Login from "./screens/Login";
import SignUp from "./screens/Register";

export default function App() {
  const {auth} = useSelector(state => state);
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
      <Navbar />
      <SideCart />
      <Switch>
        <Route path="/cart/:currentQty/:itemId" component={EditQtyItem} />
        <Route
          path="/all-products/:category/:productName/:productId"
          component={ViewProduct}
        />
        <Route
          path="/order/history/:orderId"
          component={auth.isLogin ? StateOrder : Login}
        />
        <Route
          path="/order/checkout"
          component={auth.isLogin ? CreateOrder : Login}
        />
        <Route
          path="/order/history"
          component={auth.isLogin ? HistoryOrders : Login}
        />
        <Route
          path="/dashboard/upload-product"
          component={auth.role === 1 ? UploadProduct : Login}
        />
        <Route path="/news/:newsId" component={ViewOneNews} />
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/news" component={News} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/dashboard"
          component={auth.role === 1 ? Dashboard : Login}
        />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
