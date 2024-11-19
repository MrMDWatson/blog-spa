import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const helmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);