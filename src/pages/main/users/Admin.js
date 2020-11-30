import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import DataTable from "../../../components/datatable/DataTable";
import products from "../home/products";
import QuickDetails from "../QuickDetails";

const Admin = () => {
    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <button className='btn btn-dark'>New User</button>
                    <button className='btn btn-dark ml-3'>Manage Users</button>
                    <button className='btn btn-dark ml-3'>New Show Room</button>
                    <button className='btn btn-dark ml-3'>Manage Show Rooms</button>
                </div>
                <select className='form-control w-auto pr-5'>
                    <option value="1">Last Week</option>
                </select>
            </div>
            <div className={`card shadow-sm mh-100 p-0 mt-4`}>
                <div className='card-header'>Daily Entry</div>
                <div className='card-body p-0'>
                    <DataTable rows={products} columns={columns}/>
                </div>
            </div>
        </div>
    );
};

export default Admin;
