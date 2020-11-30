import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import avatar from './img/avatar.png'
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="d-flex align-items-center shadow-sm bg-dark text-light appbar border-bottom p-4">
            {/*<form className='form-inline m-2'>*/}
            {/*    <input id='search-field' type="text" className='form-control' placeholder='Search'/>*/}
            {/*    <input type="submit" className='btn btn-info ml-3' placeholder='Search'/>*/}
            {/*</form>*/}

            <h3 className='ml-3 mb-0'>Dashboard</h3>

            <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
                <div className='notification mr-4'>
                    <i className='fa fa-bell'/>
                </div>
                <hr/>
                <span className='username'>Nuradiin</span>
                <div className='dropdown dropleft'>
                    <i id='dropdownMenuButton' className='more fa fa-chevron-down' data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false"/>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='' className="dropdown-item" type="button">Logout</Link>
                    </div>
                </div>
                <img src={avatar} alt=""/>
            </div>
        </div>
    );
};

export default Toolbar;
