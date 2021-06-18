import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FirstPage from "./pages/FirstPage";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <FirstPage />
                </Route>
                <Route path="/register">
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
