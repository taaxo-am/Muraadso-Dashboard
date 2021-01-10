import React, {useEffect, useState} from 'react';

import localData from './data'
import DataTable from "../../../components/datatable/DataTable";

const UIibin = () => {

    const cols = ['Code NO#', 'Name', 'Number', 'Item Name', 'Sale Price', 'Commission', 'Paid', 'Date of Paid']

    return (
        <div className="col-12 position-relative p-md-4 p-3 pt-4">

            <div className='d-flex align-items-center mb-3 mx-3'>
                <h5 className='text-muted'>Filter by date: </h5>
                <div className='d-flex align-items-center'>
                    <input type='date' className='mx-4 form-control'/>
                    <p className='mr-4 text-muted'>To</p>
                    <input type='date' className='form-control'/>
                    <button className='ml-4 btn btn-danger'>Apply</button>
                </div>
            </div>

            <div className={`card abs shadow-sm`}>
                <div className="card-body p-0" style={{overflowX: 'scroll', overflowY: 'scroll'}}>
                    <DataTable rows={localData} columns={cols}/>
                </div>
            </div>
        </div>
    );
};

export default UIibin;
