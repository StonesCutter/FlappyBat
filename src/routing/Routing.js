import React from "react";
import { Route, Routes } from "react-router-dom";

// SCREEN
import EntryApp from "../screens/EntryApp";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import NewsDetail from "../screens/NewsDetail";
import Cms from "../screens/Cms";
import Cart from "../screens/cms/Cart";
import Order from "../screens/cms/Order";

import PageNotFound from "../screens/PageNotFound";

function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<EntryApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/newsDetail/:id/:test" element={<NewsDetail />} />

      <Route path="cms" element={<Cms />}>
        <Route path="order" element={<Order />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing;
