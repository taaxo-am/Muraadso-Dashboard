import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import QuickDetails from "../../../components/QuickDetails";

import products from "./products";
import {Route} from "react-router-dom";

const Home = () => {

    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <>
            <div className="col-lg-4 col-md-12 order-md-10 p-md-4 p-3 pt-4">
                <QuickDetails/>
            </div>
            <div className="col-lg-8 col-md-12 order-md-5 p-md-4 p-3 pt-4">
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
