import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { initializeApp } from "firebase/app";
import firebaseKey from "./firebase/firebaseKey";
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp(firebaseKey);
// Initialize Realtime Database and get a reference to the service
getDatabase(firebaseApp);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);
