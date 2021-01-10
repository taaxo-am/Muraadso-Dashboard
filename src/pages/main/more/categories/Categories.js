import React from 'react';
import DataTable from "../../../../components/datatable/DataTable";

const Categories = () => {

    const categories = [
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },

        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
        {
            id: 2,
            name: 'Laptop',
            code: 2003223,
            description: 'Cool Laptops'
        },
    ]

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-5'>
                    <h5 className='text-dark ml-4'>Add Category</h5>
                    <form>
                        <div className='card mt-4 p-5'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input className='form-control'/>
                            </div>

                            <div className='form-group'>
                                <label>Code</label>
                                <input className='form-control'/>
                            </div>

                            <div className='form-group'>
                                <label>Description</label>
                                <textarea className='form-control'/>
                            </div>

                            <div className='form-group'>
                                <label>Photo</label>
                                <div className="custom-file mb-3">
                                    <input type="file" className="custom-file-input" id="photo" name='name'/>
                                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose
                                        file...</label>
                                    <div className="invalid-feedback">Invalid custom file feedback</div>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <button className='btn btn-outline-dark flex-grow-1' type='reset'>Reset</button>
                                <button className='btn btn-dark ml-4 flex-grow-1' type='reset'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='col-7'>
                    <h5 className='text-dark ml-4'>Categories Table</h5>
                    <div className='card mt-4'>
                        <DataTable columns={['Code', 'Name', 'Description']} rows={categories}/>
                    </div>
                </div>

                {/*<div className='col'>*/}
                {/*    <h4 className='text-dark'>Add New Brand</h4>*/}
                {/*    <div className='card mt-4 p-5'>*/}
                {/*        <div className='form-group'>*/}
                {/*            <label>Brand Name</label>*/}
                {/*            <input className='form-control'/>*/}
                {/*        </div>*/}

                {/*        <div className='form-group'>*/}
                {/*            <label>Brand Category</label>*/}
                {/*            <select className='form-control'>*/}
                {/*                <option>Mobile Phone</option>*/}
                {/*                <option>Laptop</option>*/}
                {/*                <option>Camera</option>*/}
                {/*                <option>Other</option>*/}
                {/*            </select>*/}
                {/*        </div>*/}

                {/*        <div className='form-group'>*/}
                {/*            <label>Brand Price</label>*/}
                {/*            <input type='number' className='form-control'/>*/}
                {/*        </div>*/}

                {/*        <div className='form-group'>*/}
                {/*            <label>Brand Photo</label>*/}
                {/*            <div className="custom-file mb-3">*/}
                {/*                <input type="file" className="custom-file-input" id="photo" name='name'/>*/}
                {/*                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose*/}
                {/*                    file...</label>*/}
                {/*                <div className="invalid-feedback">Invalid custom file feedback</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className='d-flex'>*/}
                {/*            <button className='btn btn-outline-dark flex-grow-1' type='reset'>Reset</button>*/}
                {/*            <button className='btn btn-dark ml-4 flex-grow-1' type='reset'>Submit</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Categories;
