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

const Filter = () => {

    const columns = ['Product', 'Status', 'Code Number', 'Ownership']

    return (
        <div className="p-md-4 p-3 pt-4 w-100">


            <h4 className='text-dark'>Filter All Services</h4>

            <div className='d-flex align-items-center my-3'>
                <h5 className='text-secondary'>Filter by:</h5>
                <div className='d-flex align-items-center'>
                    <select className='form-control ml-4' value='0'>
                        <option disabled value='0'>Service</option>
                        <option>U iibinta</option>
                        <option>Ka iibsiga</option>
                        <option>Isku bedelka</option>
                    </select>
                </div>

                <div className='d-flex align-items-center'>
                    <select className='form-control ml-4' value='0'>
                        <option disabled value='0'>Location</option>
                        <option>Hargeisa</option>
                        <option>Burco</option>
                        <option>Borama</option>
                    </select>
                </div>

                <div className='d-flex align-items-center'>
                    <select className='form-control ml-4' value='0'>
                        <option disabled value='0'>Payment</option>
                        <option>Paid</option>
                        <option>Un Paid</option>
                    </select>
                </div>


                <h5 className='text-muted w-auto ml-4'>Filter by date:</h5>
                <div className='d-flex align-items-center'>
                    <input type='date' className='mx-4 w-auto form-control'/>
                    <p className='mr-4'>To</p>
                    <input type='date' className='w-auto form-control'/>
                </div>
            </div>

            <div className={`card shadow-sm`}>
                <div className="card-body p-0" style={{overflowX: 'scroll', overflowY: 'scroll'}}>
                    <DataTable rows={products} columns={columns}/>
                </div>
            </div>
        </div>
    );
};

export default Filter;
