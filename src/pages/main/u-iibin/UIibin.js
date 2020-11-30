import React, {useEffect, useState} from 'react';

import localData from './data'
import DataTable from "../../../components/datatable/DataTable";

const UIibin = () => {

    const cols = ['Code NO#', 'Name', 'Number', 'Item Name', 'Sale Price', 'Commission', 'Paid', 'Date of Paid']

    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const [sortBy, setSortBy] = useState('0');
    const sortChangeHandler = e => {
        const value = e.target.value
        setSortBy(value)

        data.sort((a, b) => {
            let comparison = 0
            let nameA = a.name.toLowerCase()
            let nameB = b.name.toLowerCase()

            if (nameA > nameB) comparison = 1
            else if (nameA < nameB) comparison = -1
            return comparison
        })
    }

    useEffect(() => {
        setData(localData)
    }, [])

    return (
        <div className={`card mt-2 shadow-sm mh-100 p-0`}>
            <div className='card-header align-items-center d-flex justify-content-between'>
                Adeega U Iibinta
                <div className='d-flex w-50'>
                    <select className='form-control form-control-sm' value={sortBy} onChange={sortChangeHandler}>
                        <option value='0' disabled>Sort by...</option>
                        <option value='1'>Paid</option>
                        <option value='2'>OnChecking</option>
                        <option value='3'>Not Paid</option>
                    </select>
                    <input className='form-control form-control-sm ml-3 flex-grow-1' placeholder='Search' value={searchQuery}
                           onChange={e => setSearchQuery(e.target.value)}/>
                </div>
            </div>
            <div className="card-body p-0">
                <DataTable rows={data} columns={cols} />
            </div>
        </div>
    );
};

export default UIibin;
