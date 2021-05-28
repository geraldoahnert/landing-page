import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import FirstPage from "./components/FirstPage.js";

function App() {
    return (
        <Router>
            <Navbar />
            <FirstPage />
        </Router>
    );
}

export default App;
