import React, {useEffect, useState} from 'react';

import './styles.css'
import DataTable from "../../../components/datatable/DataTable";

import localData from './data'

const Iskubedel = () => {

    const cols = ['Name', 'Number', 'Item Name', 'Item Type', 'Location', 'Condition', 'Purchase Price', 'Sale Price']

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

    const handleSearching = e => {
        const value = e.target.value
        setSearchQuery(value)

        const newData = data.filter(item => {
            // if (item.name.);
        })
        console.log(value, newData.length)

        setData(newData)
    }

    useEffect(() => {
        setData(localData)
    }, [])

    return (
        <div className={`card mt-2 shadow-sm mh-100 p-0`}>
            <div className='card-header align-items-center d-flex justify-content-between'>
                Adeega Iskubedel ka
                <div className='d-flex w-50'>
                    <select className='form-control form-control-sm' value={sortBy} onChange={sortChangeHandler}>
                        <option value='0' disabled>Sort by...</option>
                        <option value='1'>Name</option>
                        <option value='2'>Condition</option>
                        <option value='3'>Location</option>
                        <option value='4'>Item type</option>
                    </select>
                    <input className='form-control form-control-sm ml-3 flex-grow-1' placeholder='Search' value={searchQuery}
                    onChange={handleSearching}/>
                </div>
            </div>
            <div className="card-body p-0">
                <DataTable columns={cols} rows={data}/>
            </div>
        </div>
    );
};

export default Iskubedel;
