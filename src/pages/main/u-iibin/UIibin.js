import React, {useEffect, useState} from 'react';

import localData from './data'
import DataTable from "../../../components/datatable/DataTable";

const UIibin = () => {

    const cols = ['Code NO#', 'Name', 'Number', 'Item Name', 'Sale Price', 'Commission', 'Paid', 'Date of Paid']

    return (
        <div className="col-12 position-relative p-md-4 p-3 pt-4">
            <div className={`card abs shadow-sm`}>
                <div className="card-body p-0" style={{overflowX: 'scroll', overflowY: 'scroll'}}>
                    <DataTable rows={localData} columns={cols}/>
                </div>
            </div>
        </div>
    );
};

export default UIibin;
