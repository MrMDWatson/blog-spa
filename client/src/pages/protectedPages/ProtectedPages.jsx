import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/appSplice';
import axios from 'axios';
import LoginPage from '../loginPage/LoginPage';

export default function ProtectedPages() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.app);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: "/user"
    })
      .then((result) => {
        if (result.data.username) {
          dispatch(setUser(result.data.username));
        } else {
          dispatch(setUser(null));
        }
      })
      .catch((error) => {
        dispatch(setUser(null));
        error = new Error();
      });
    setLoaded(true);
  }, []);
  return loaded
    ? (user ? (<Outlet />) : (<LoginPage />))
    : (<div><h1>Loading...</h1></div>)
}
