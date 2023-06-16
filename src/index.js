import React from "react";
import "flowbite";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Url from "./container/Url/Url";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import rootReducer from "./redux/reducer/globalReducer";
import { store } from "../src/config/redux/store";
import firebaseConfig from "./config/firebase/index";

// console.log("config firebase : ", firebaseConfig);

// Store
// const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
