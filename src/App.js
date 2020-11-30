import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route path='/main'>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
