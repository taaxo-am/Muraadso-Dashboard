import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import QuickDetails from "../../../components/QuickDetails";

const products = [
    {
        id: 1,
        name: 'Dell PC',
        status: 'Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },
    {
        id: 26,
        name: 'iPhone 7 plus',
        status: 'Not Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },
    {
        id: 27,
        name: 'Acer Laptop',
        status: 'Not Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },
    {
        id: 28,
        name: 'Samsung J5/6',
        status: 'Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },

    {
        id: 28,
        name: 'Samsung J5/6',
        status: 'Not Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },

    {
        id: 28,
        name: 'Samsung J5/6',
        status: 'Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },

    {
        id: 28,
        name: 'Samsung J5/6',
        status: 'Not Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },

    {
        id: 28,
        name: 'Samsung J5/6',
        status: 'Not Returned',
        code: '#2312323',
        owner: 'Xamse Yare',
    },
]

const Failed = () => {

    const columns = ['Product', 'Status', 'Code Number', 'Ownership']

    return (
        <>
            <div className="col-lg-4 col-md-12 order-md-10 p-md-4 p-3 pt-4">
                <QuickDetails/>
            </div>
            <div className="col-lg-8 col-md-12 order-md-5 p-md-4 p-3 pt-4">

                <div className='d-flex justify-content-between align-items-center mb-3 mx-4'>
                    <div className='d-flex align-items-center'>
                        <h5 className='text-muted'>Filter: </h5>
                        <select className='form-control ml-4'>
                            <option>All</option>
                            <option>Returned only</option>
                            <option>Not Returned only</option>
                        </select>
                    </div>

                    <div className='d-flex align-items-center'>
                        <h5 className='text-muted'>Filter by: </h5>
                        <div className='d-flex align-items-center'>
                            <input type='date' className='mx-4 form-control'/>
                            <p className='mr-4 text-muted'>To</p>
                            <input type='date' className='form-control'/>
                        </div>
                    </div>
                </div>

                <div className={`card shadow-sm`}>
                    <div className="card-body p-0" style={{overflowX: 'scroll', overflowY: 'scroll'}}>
                        <DataTable rows={products} columns={columns}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Failed;
