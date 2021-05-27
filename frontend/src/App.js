import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditeScreen from "./screens/UserEditeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditeScreen from "./screens/ProductEditeScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="mx-auto container p-3 font-nunito leading-relaxed overflow-hidden">
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userList" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditeScreen} />
          <Route
            path="/admin/productList"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productList/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/product/:id/edit"
            component={ProductEditeScreen}
          />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/orderList" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
