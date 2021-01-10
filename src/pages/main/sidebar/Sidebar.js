import React from 'react';
import {NavLink} from "react-router-dom";
import './styles.css'
import logo from './circular-logo.png'

const Sidebar = ({sidebar}) => {

    return (
        <div ref={sidebar} className={`h-100 sidebar`}>
            <div className="d-flex flex-column align-items-center sidebar-content">
                <div className='bars'>
                    <img alt='' src={logo} className="w-75 border border-secondary rounded-circle"/>
                    <i className='fa fa-times text-right' onClick={() => {
                        sidebar.current.classList.remove('shown')
                    }}/>
                </div>

                <NavLink className='link mt-2' to='/main/home' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-home" onClick={() => {
                        sidebar.current.classList.remove('shown')
                    }}/>
                    <p>Home</p>
                </NavLink>

                <NavLink className='link' to='/main/registration' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-cash-register"/>
                    <p>Registration</p>
                </NavLink>

                <NavLink className='link' to='/main/pricing' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-tag"/>
                    <p>Pricing</p>
                </NavLink>

                <NavLink className='link' to='/main/isku-bedel' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-exchange-alt"/>
                    <p>Isku Bedelka</p>
                </NavLink>

                <NavLink className='link' to='/main/u-iibin' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-sync-alt"/>
                    <p>U Iibinta</p>
                </NavLink>

                <NavLink className='link' to='/main/ka-iibsasho' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-store"/>
                    <p>Ka Iibsashada</p>
                </NavLink>

                <NavLink className='link' to='/main/more' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-shapes"/>
                    <p>More</p>
                </NavLink>

                <NavLink className='link' to='/main/admin' onClick={() => {
                    sidebar.current.classList.remove('shown')
                }}>
                    <i className="fa fa-user"/>
                    <p>Administration</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
