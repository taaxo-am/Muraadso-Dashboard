import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import QuickDetails from "../QuickDetails";

import products from "./products";
import {Route} from "react-router-dom";

const Home = () => {

    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <>
            <div className="col-lg-8 position-relative col-md-12">
                <div className={`card abs shadow-sm`}>
                    {/*<div className="card-header">Daily Entry</div>*/}
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
