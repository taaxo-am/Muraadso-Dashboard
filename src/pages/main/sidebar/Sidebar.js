import React from 'react';
import {NavLink} from "react-router-dom";
import './styles.css'

const Sidebar = () => {

    return (
        <div className="d-flex h-100 flex-md-column align-items-center sidebar">
            <i className="fa fa-bars bars"/>
            <NavLink className='link' to='/main/home'>
                <i className="fa fa-home"/>
            </NavLink>

            <NavLink className='link' to='/main/registration'>
                <i className="fa fa-cash-register"/>
            </NavLink>

            <NavLink className='link' to='/main/registration'>
                <i className="fa fa-tag"/>
            </NavLink>

            <NavLink className='link' to='/main/isku-bedel'>
                <i className="fa fa-exchange-alt"/>
            </NavLink>

            <NavLink className='link' to='/main/u-iibin'>
                <i className="fa fa-sync-alt"/>
            </NavLink>

            <NavLink className='link' to='/main/ka-iibsasho'>
                <i className="fa fa-store"/>
            </NavLink>

            <NavLink className='link' to='/main/admin'>
                <i className="fa fa-user"/>
            </NavLink>
        </div>
    );
};

export default Sidebar;
