import React, {useEffect, useState} from 'react';

import DataTable from "../../../components/datatable/DataTable";

import localData from './data'

const Iskubedel = () => {

    const cols = ['Name', 'Number', 'Item Name', 'Item Type', 'Location', 'Condition', 'Purchase Price', 'Sale Price']

    // const sortChangeHandler = e => {
    //     const value = e.target.value
    //     setSortBy(value)
    //
    //     data.sort((a, b) => {
    //         let comparison = 0
    //         let nameA = a.name.toLowerCase()
    //         let nameB = b.name.toLowerCase()
    //
    //         if (nameA > nameB) comparison = 1
    //         else if (nameA < nameB) comparison = -1
    //         return comparison
    //     })
    // }

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

export default Iskubedel;
