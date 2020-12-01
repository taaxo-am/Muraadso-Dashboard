import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import avatar from './img/avatar.png'
import {Link} from "react-router-dom";

const Toolbar = ({route}) => {
    return (
        <div className="d-flex align-items-center shadow-sm appbar p-4">
            {/*<form className='form-inline m-2'>*/}
            {/*    <input id='search-field' type="text" className='form-control' placeholder='Search'/>*/}
            {/*    <input type="submit" className='btn btn-info ml-3' placeholder='Search'/>*/}
            {/*</form>*/}

            <h3 className='ml-3 mb-0 title'>Dashboard / {route}</h3>

            <div className='d-flex flex-grow-1 justify-content-end align-items-center mr-2'>
                <form className='d-flex'>
                    <input className='form-control flex-grow-1' placeholder='Search...'/>
                    <input className='btn btn-success ml-4' type='submit' value='Search'/>
                </form>
                <div className='notification mr-4'>
                    <i className='fa fa-bell'/>
                </div>
                <hr/>
                <span className='username'>Nuradiin</span>
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
    );
};

export default Toolbar;
