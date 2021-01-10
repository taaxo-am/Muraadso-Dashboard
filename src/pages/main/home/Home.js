import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import QuickDetails from "../../../components/QuickDetails";

import products from "./products";

const Home = () => {

    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <>
            <div className="col-lg-4 col-md-12 order-md-10 p-md-4 p-3 pt-4">
                <QuickDetails/>
            </div>
            <div className="col-lg-8 col-md-12 order-md-5 p-md-4 p-3 pt-4">
                <div className='d-flex mx-3 pb-3 align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <h5 className='lead text-secondary'> Filter by:</h5>
                        <input type='date' className='ml-4 form-control w-auto'/>
                        <button className='ml-4 btn btn-danger'>Apply</button>
                    </div>

                    <input type="text" className='w-auto form-control' placeholder='Search...'/>

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

export default Home;
