import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
   <Provider store={store}>
   <PersistGate loading={"loading"} persistor={persistor}>
        <App />
   </PersistGate>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);