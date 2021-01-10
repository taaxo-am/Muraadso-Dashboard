import React from 'react';

import categories from '../../../assets/img/categories.png'
import filter from '../../../assets/img/filter.png'
import quality from '../../../assets/img/quality.png'
import failed from '../../../assets/img/failed.png'
import {NavLink} from "react-router-dom";
import {Route} from "react-router";
import Failed from "./Failed";
import QualityChecking from "./QualityChecking";
import Categories from "./categories/Categories";
import Filter from "./Filter";

const More = () => {

    return (
        <>
            <Route exact path='/main/more'>
                <div className='w-100 mx-5 mx-5 my-3'>
                    <h3 className='text-dark mx-3'>Product Services</h3>
                    <div className='card mx-auto p-5 mt-3'>
                        <div className='d-flex w-100 justify-content-around'>
                            <div className='d-flex'>
                                <img className='img-fluid p-3' src={categories} alt=""/>
                                <div className='d-flex flex-column m-4'>
                                    <small className='text-muted'>Category</small>
                                    <NavLink to='/main/more/categories'>
                                        <h5 className='mt-4'>Category Page</h5>
                                    </NavLink>
                                    <p className='mt-4 text-muted'>Add Categories</p>
                                    <p className='text-muted'>Add Brands</p>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <img className='img-fluid p-3' src={quality} alt=""/>
                                <div className='d-flex flex-column m-4'>
                                    <small className='text-muted'>Quality checking 20/20/20</small>
                                    <NavLink to='/main/more/quality'>
                                        <h5 className='mt-4'>Product Quality Checking</h5>
                                    </NavLink>
                                    <p className='mt-4 text-muted'>Checking products while<br/>
                                        in Checking or Not checked</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around w-100 mt-4'>

                            <div className='d-flex'>
                                <img className='img-fluid p-3' src={filter} alt=""/>
                                <div className='d-flex flex-column m-4'>
                                    <small className='text-muted'>Filter</small>
                                    <NavLink to='/main/more/filter'>
                                        <h5 className='mt-4'>Filter Products</h5>
                                    </NavLink>
                                    <p className='mt-4 text-muted'>Filter All Producst <br/>and Brands</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <img className='img-fluid p-3' src={failed} alt=""/>
                                <div className='d-flex flex-column m-4'>
                                    <small className='text-muted'>Failed Items</small>
                                    <NavLink to='/main/more/failed'>
                                        <h5 className='mt-4'>Failed Items</h5>
                                    </NavLink>
                                    <p className='mt-4 text-muted'>Check the failed Items
                                        by filtering <br/>Returned items  or Not returned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path='/main/more/categories'>
                <Categories />
            </Route>
            <Route path='/main/more/filter'>
                <Filter />
            </Route>
            <Route path='/main/more/quality'>
                <QualityChecking />
            </Route>
            <Route path='/main/more/failed'>
                <Failed />
            </Route>
            </>
    );
};

export default More;

