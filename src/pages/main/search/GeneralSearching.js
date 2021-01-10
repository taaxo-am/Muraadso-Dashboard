import React, {useState} from 'react';
import DataTable from "../../../components/datatable/DataTable";

import './search.css'

const GeneralSearching = () => {

    const products = [
        {
            id: 1,
            code: '#2312323',
            name: 'A',
            number: '',
            itemName: '',
            salePrice: '$',
            commission: '',
            action: true,
            dateOfPaid: '',
        },
    ]

    const [data, setData] = useState(products)


    const [showTable, setShowTable] = useState(false);

    const columns = ['Code Number', 'Name', 'Number', 'Item Name', 'Sale Price', 'Commission', 'Paid', 'Date of Paid']

    return (
        <div className={`search-wrapper container mx-auto mt-5 ${showTable && 'pt-0'}`}>
            <form>
                <div className="input-group p-0 w-100 d-flex">
                    <input
                        onChange={(e) => {
                            if (e.target.value) {
                                setShowTable(true);
                            } else {
                                setShowTable(false);
                            }
                        }}
                        className='search-input flex-grow-1 form-control form-control-lg'
                        placeholder='What are you looking for?'/>
                    <div className='input-group-append'>
                        <button className='btn btn-dark'>SEARCH</button>
                    </div>
                </div>
            </form>

            <div className={`card d-none shadow-sm mt-5 ${showTable && 'd-block'}`}>
                <div className="card-body p-0" style={{overflowX: 'hidden', overflowY: 'scroll'}}>
                    <DataTable rows={data} columns={columns} />
                </div>
            </div>
        </div>
    );
};

export default GeneralSearching;
