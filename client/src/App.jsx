import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "./app/appSplice"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.app);
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
  }, []);
  return (
    <div id="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}