import React from "react";
import { ToastContainer } from "react-toastify";
import MainRoutes from './routes/Routes'

const App = () => {
    return (<>
        <MainRoutes />;
        <ToastContainer />
    </>)
};

export default App;