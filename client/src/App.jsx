import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

export default function App() {
  return (
    <div id="App">
      <div className='App-container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}