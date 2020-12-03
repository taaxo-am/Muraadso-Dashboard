import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import avatar from './img/avatar.png'
import {Link} from "react-router-dom";

const Toolbar = ({sidebar, route}) => {
    return (
        <div className='position-relative w-100 appbar'>
            <div className="d-flex align-items-center position-fixed shadow-sm appbar-content bg-white p-4">
                <i className='fa fa-bars d-block d-md-none p-3 lightHover' onClick={e => {
                    console.log('showing')
                    sidebar.current.classList.toggle('shown')
                }}/>
                <h3 className='ml-3 mb-0 title'>{route[0].toUpperCase() + route.slice(1)}</h3>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center mr-2'>
                    <div className='d-md-flex align-items-center d-none'>
                        <div className='notification mr-4'>
                            <i className='fa fa-bell'/>
                        </div>

                        <hr/>

                        <span className='username'>Nuradiin</span>
                    </div>

                    <div className='dropdown dropleft'>
                        <i id='dropdownMenuButton' className='more lightHover fa fa-chevron-down' data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"/>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to='' className="dropdown-item" type="button">Logout</Link>
                        </div>
                    </div>

                    <img className='border border-primary rounded-circle' src={avatar} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
