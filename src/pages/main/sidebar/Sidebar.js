import React from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";
import './styles.css'

const Sidebar = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className="d-flex h-100 flex-md-column align-items-center sidebar">
            <i className="fa fa-bars bars"/>
            <NavLink className='link' to={`/main/data`}>
                <i className="fa fa-home"/>
            </NavLink>

            <NavLink className='link' to={`/main/registration`}>
                <i className="fa fa-cash-register"/>
            </NavLink>

            <NavLink className='link' to='/main/iskubedel'>
                <i className="fa fa-exchange-alt"/>
            </NavLink>

            <NavLink className='link' to='/main/uiibin'>
                <i className="fa fa-sync-alt"/>
            </NavLink>

            <NavLink className='link' to='/bou'>
                <i className="fa fa-store"/>
            </NavLink>

            <NavLink className='link' to='/main/admin'>
                <i className="fa fa-user"/>
            </NavLink>
        </div>
    );
};

export default Sidebar;
