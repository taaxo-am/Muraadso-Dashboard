import React from 'react';
import DataTable from "../../../components/datatable/DataTable";
import localData from "./data";

const Pricing = () => {

    const cols = ['Brand', 'Product', 'Condition', 'Q. Ku-Iibinta', 'Q. Isku-bedelka', 'Condition', 'Q. Ku-Iibinta', 'Q. Isku-bedelka']

    return (
            <div className="col-12 p-md-4 p-3 pt-4">
                <div className='d-flex'>
                    <button className='btn btn-danger' data-toggle="modal" data-target="#pricingModal">Insert New
                        Pricing
                    </button>
                    <input type="text" className='ml-4 w-50 form-control' placeholder='Search...'/>
                </div>

                <div className='card mt-4 shadow-sm'>
                    <div className="card-body p-0" style={{overflowX: 'scroll'}}>
                        <DataTable columns={cols} rows={localData}/>
                    </div>
                </div>

                <div className='modal fade' id="pricingModal" tabIndex="-1" role="dialog"
                     aria-labelledby="pricingModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title ml-4" id="pricingModalLabel">New Pricing</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row p-2'>
                                    <div className="col-md-6 col-12 mt-2 d-flex flex-column justify-content-around">
                                        <select className='form-control' value='-1'>
                                            <option value='-1' disabled>-- Select Category --</option>
                                            <option value='0'>Computers</option>
                                            <option value='1'>Mobile Phones</option>
                                            <option value='2'>Cameras</option>
                                        </select>
                                        <div
                                            className='h-75 border rounded shadow-sm d-flex flex-column justify-content-center align-items-center'>
                                            <i className='fa fa-cloud-upload-alt text-muted'
                                               style={{fontSize: '108px', color: 'gray'}}></i>
                                            <p className='mt-4'
                                               style={{fontSize: '16px', fontFamily: 'Roboto, sans-serif'}}>Drag and
                                                Drop</p>
                                            <p style={{fontSize: '14px', fontFamily: 'Roboto, sans-serif'}}>Your files
                                                and
                                                assets or <a href='#'>Browse</a></p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12 mt-2">
                                        <form>
                                            <div className='d-flex'>
                                                <div className='form-group'>
                                                    <label htmlFor="">Brand: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className='form-group ml-3'>
                                                    <label htmlFor="">Product: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="">Condition: </label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='form-group'>
                                                    <label htmlFor="">Q. Ku Iibinta: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className='form-group ml-3'>
                                                    <label htmlFor="">Q. Isku Bedel-ka: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="">Condition: </label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='form-group'>
                                                    <label htmlFor="">Q. Ku Iibinta: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className='form-group ml-3'>
                                                    <label htmlFor="">Q. Isku Bedel-ka: </label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Pricing;
