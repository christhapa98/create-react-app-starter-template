import React from "react";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css"
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);