import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
// import { store, persistor } from "./redux/store";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
