import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import QuickDetails from "../QuickDetails";

import products from "./products";

const Home = () => {
    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <>
            <div className="col-lg-8 col-md-12 p-4">
                <div className={`card shadow-sm h-100 w-100 p-0`}>
                    <div className="card-header">Daily Entry</div>
                    <div className="card-body p-0">
                        <DataTable rows={products} columns={columns}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 p-4">
                <QuickDetails/>
            </div>
        </>
    );
};

export default Home;
