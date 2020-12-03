import React from 'react';

import DataTable from "../../../components/datatable/DataTable";

import localData from './data'

const KaIibsasho = () => {

    const cols = ['Name', 'Number', 'Item Name', 'Item Type', 'Location', 'Condition', 'Purchase Price', 'Sale Price']

    return (
        <div className="col-12 position-relative p-md-4 p-3 pt-4">
            <div className={`card abs shadow-sm`}>
                <div className="card-body p-0" style={{overflowX: 'scroll', overflowY: 'scroll'}}>
                    <DataTable columns={cols} rows={localData}/>
                </div>
            </div>
        </div>
    );
};

export default KaIibsasho;
