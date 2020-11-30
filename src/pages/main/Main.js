import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles.css'

import Sidebar from "./sidebar/Sidebar";
import QuickDetails from "./QuickDetails";
import Toolbar from "./Toolbar";
import Registration from "./registration/Registration";
import Login from "../login/Login";
import Admin from "./users/Admin";
import UsersList from "./users/UsersList";
import Iskubedel from "./iskubedel/Iskubedel";
import Home from "./home/Home";
import UIibin from "./u-iibin/UIibin";

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <div className='container-fluid d-flex flex-md-row flex-column vh-100 p-0'>
                    <Sidebar/>
                    <div className='d-flex flex-column h-100 bg-light center'>
                        <Toolbar/>

                        {/*<nav className='bg-white ml-4' aria-label="breadcrumb">*/}
                        {/*    <ol className="breadcrumb bg-white m-0">*/}
                        {/*        <li className="breadcrumb-item"><a href="#">Home</a></li>*/}
                        {/*        <li className="breadcrumb-item"><a href="#">Library</a></li>*/}
                        {/*        <li className="breadcrumb-item active" aria-current="page">Data</li>*/}
                        {/*    </ol>*/}
                        {/*</nav>*/}

                        <section className="row h-100 pl-2 pr-2 m-0">
                            <Switch>

                                <Route path='/main/data'>
                                    <Home />
                                </Route>

                                <Route path='/main/registration'>
                                    <div className="col-lg-8 col-md-12 p-4">

                                        <Registration/>

                                    </div>

                                    <div className="col-lg-4 col-md-12 p-4">
                                        <QuickDetails/>
                                    </div>

                                </Route>

                                <Route path='/main/iskubedel'>
                                    <div className="col-12 p-4">

                                        <Iskubedel />
                                    </div>
                                </Route>

                                <Route path='/main/uiibin'>
                                    <div className="col-12 p-4">

                                        <UIibin />
                                    </div>
                                </Route>

                                <Route path='/main/admin'>
                                    <div className="col-lg-8 col-md-12 p-4">

                                        <Admin/>

                                    </div>

                                    <div className="col-lg-4 col-md-12 p-4">
                                        <UsersList/>
                                    </div>

                                </Route>

                            </Switch>
                        </section>
                    </div>
                </div>
            </Switch>
        </Router>
    );
};

export default Main;
