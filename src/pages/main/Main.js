import React, {useEffect, useState} from 'react';
import {Router, Switch, Route, useHistory, useLocation} from "react-router";
import './styles.css'

import Login from "../login/Login";
import Sidebar from "./sidebar/Sidebar";
import Toolbar from "./Toolbar";
import Home from "./home/Home";
import Registration from "./registration/Registration";
import Iskubedel from "./iskubedel/Iskubedel";
import UIibin from "./u-iibin/UIibin";
import Admin from "./users/Admin";
import KaIibsasho from "./ka-iibsasho/KaIibsasho";

const Main = () => {

    let history = useHistory();
    const location = useLocation();
    const pathName = location.pathname;

    const [route, setRoute] = useState('Home')

    useEffect(() => {
        console.log(pathName.split('/'))
        setRoute(pathName.split('/')[2])
    }, [pathName]);

    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <div className='container-fluid d-flex flex-md-row flex-column vh-100 p-0'>
                    <Sidebar/>

                    <div className='d-flex flex-column h-100 bg-light center'>

                        <Toolbar route={route}/>

                        <section className="section row m-0 pl-2 pr-2">
                            <Switch>

                                <Route path='/main/home'>
                                    <Home/>
                                </Route>

                                <Route path='/main/registration'>
                                    <Registration/>
                                </Route>

                                <Route path='/main/prices'>
                                    <Registration/>
                                </Route>

                                <Route path='/main/isku-bedel'>
                                    <Iskubedel/>
                                </Route>

                                <Route path='/main/u-iibin'>
                                    <UIibin/>
                                </Route>

                                <Route path='/main/ka-iibsasho'>
                                    <KaIibsasho/>
                                </Route>

                                <Route path='/main/admin'>
                                    <Admin/>
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
