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
import Index from "./users";
import KaIibsasho from "./ka-iibsasho/KaIibsasho";
import Pricing from "./pricing/Pricing";
import Failed from "./more/Failed";
import GeneralSearching from "./search/GeneralSearching";
import QualityChecking from "./more/QualityChecking";
import More from "./more/More";

const Main = () => {

    let history = useHistory();
    const location = useLocation();
    const pathName = location.pathname;

    const [route, setRoute] = useState('Home')
    const sidebar = React.createRef()

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

                <div className='wrapper d-flex'>
                    <aside>
                        <Sidebar sidebar={sidebar}/>
                    </aside>

                    <main className='flex-grow-1'>
                        <header>
                            <Toolbar sidebar={sidebar} route={route}/>
                        </header>

                        <section className="section row position-relative m-0">
                            <Switch>
                                <Route path='/main/home'>
                                    <Home/>
                                </Route>

                                <Route path='/main/registration'>
                                    <Registration/>
                                </Route>

                                <Route path='/main/pricing'>
                                    <Pricing/>
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

                                <Route path='/main/more'>
                                    <More/>
                                </Route>

                                <Route path='/main/general-search'>
                                    <GeneralSearching/>
                                </Route>

                                <Route path='/main/admin'>
                                    <Index/>
                                </Route>
                            </Switch>
                        </section>
                    </main>
                </div>

                {/*<div className='container-fluid d-flex flex-md-row flex-column vh-100 p-0'>*/}
                {/*    <Sidebar/>*/}

                {/*    <main className='d-flex flex-column h-100 bg-light center'>*/}

                {/*        <Toolbar route={route}/>*/}

                {/*<section className="section row m-0 pl-2 pr-2">*/}
                {/*    <Switch>*/}

                {/*        <Route path='/main/home'>*/}
                {/*            <Home/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/registration'>*/}
                {/*            <Registration/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/pricing'>*/}
                {/*            <Pricing/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/isku-bedel'>*/}
                {/*            <Iskubedel/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/u-iibin'>*/}
                {/*            <UIibin/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/ka-iibsasho'>*/}
                {/*            <KaIibsasho/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/main/admin'>*/}
                {/*            <Index/>*/}
                {/*        </Route>*/}

                {/*    </Switch>*/}
                {/*</section>*/}
                {/*    </main>*/}
                {/*</div>*/}
            </Switch>
        </Router>
    );
};

export default Main;
