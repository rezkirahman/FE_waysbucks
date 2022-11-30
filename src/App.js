import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";

import { Route, Routes, useNavigate } from 'react-router-dom';
import Navs from './page/navs';
import Home from './page/home'
import Detail from './page/detail-product';
import Profile from './page/profile'
import Cart from './page/cart'
import Admin from './page/admin'
import Addproduct from './page/add-product'
import Addtopping from './page/add-topping'


function App() {

  let navigate = useNavigate();

  // Init user context 
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.status === 'admin') {
        navigate('/transaction');
      } else if (state.user.status === 'customer') {
        navigate('/');
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Navs />
      <body style={{ backgroundColor: '#FFFBFB' }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/cart' element={<Cart />} />
          {/* ADMIN PAGE */}
          <Route exact path='/add-product' element={<Addproduct />} />
          <Route exact path='/add-topping' element={<Addtopping />} />
          <Route exact path='/transaction' element={<Admin />} />

        </Routes>
      </body>
    </>
  );
}

export default App;
