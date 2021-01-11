import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orders from "./Oders";
import Home from "./Home";
import Navbar from "./Navbar";
import React from "react";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;