import React, { createContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './page/cart/Cart';
import Header from './page/Header';
import Product from './page/product/Product';
import Order from './page/order/Order';
import OrderDetails from './page/order/OrderDetails';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"
import Payment from './page/order/Payment';
import Coin from './page/coin/Coin';


const Client = () => {

  const user = useSelector((state) => state.auth.login?.currentUser)
  // debugger
  const status =  useSelector((state) => state.auth.login?.error)
  // let token = localStorage.getItem("token")

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = user?.token
  const role = user?.roleName
  // debugger
  
  console.log(token)
  let date = new Date()



  useEffect(() => {
      if (user == null || status === true ||  token == null || role != "CUSTOMER") {
          navigate("/login")
      }
      if (user) {
          const decodedToken = jwt_decode(user?.token)
          if (decodedToken.exp < date.getTime() / 1000) {
              navigate("/login")
          }
      }
  },[])

  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:id/orderDetails" element={<OrderDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/coin" element={<Coin />} />

        </Routes>
    </div>
  );
};

export default Client;
