import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from '@reduxjs/toolkit';
import { store } from 'redux/store/store';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
