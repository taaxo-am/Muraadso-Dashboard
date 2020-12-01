import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yub from 'yup'
import './styles.css'
import QuickDetails from "../QuickDetails";
import {Route} from "react-router-dom";

const initialState = {
    name: '',
    phone: '',
    sender: '',
    service: '1'
}

const validationSchema = Yub.object({
    name: Yub.string().required('Required'),
    phone: Yub.string().required('Required'),
    sender: Yub.string().required('Required'),
    service: Yub.string().required('Required')
})

const Registration = () => {

    const [nextForm, setNextForm] = useState(false)

    const toggleForms = () => {
        setNextForm(prevState => !prevState)
    }

    const onSubmitForm1 = values => {
        toggleForms()
    }

    const handleNext = e => {
        e.preventDefault()
        if (!nextForm) setNextForm(true)
    }

    return (
        <>
            <div className="col-lg-8 col-md-12 p-4">

                <div className='row w-100 h-auto m-0'>
                    <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={onSubmitForm1}>
                        <div className={`card col shadow-sm mh-100 p-0 ${nextForm && 'card-disabled'}`}>
                            <div className='card-header'>Ka Qabashada P1</div>
                            <div className='card-body'>
                                <Form className='pl-4 pr-4'>
                                    <div className="form-group">
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="name">Name :</label>
                                            <ErrorMessage name='name'>
                                                {error => {
                                                    return <span className='mt-1 text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <Field className='form-control' id='name' name='name' type='text'/>
                                    </div>

                                    <div className='form-group'>
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="phone">Phone Number :</label>
                                            <ErrorMessage name='phone'>
                                                {error => {
                                                    return <span
                                                        className='mt-1 text-right text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <div className="input-group p-0">
                                            <div className='input-group-prepend'>
                                                <div className="input-group-text">+252</div>
                                            </div>
                                            <Field name='phone' className='form-control' id='phone' type='phone'/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="received_by">Received By :</label>
                                            <ErrorMessage name='sender'>
                                                {error => {
                                                    return <span className='mt-1 text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <Field name='sender' className='form-control' id='received_by' type='text'/>
                                    </div>

                                    <div className='form-group'>
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="service">Service :</label>
                                            <ErrorMessage name='service'>
                                                {error => {
                                                    return <span className='mt-1 text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <Field component='select' name='service' value='1' className='form-control'
                                               id='service'>
                                            <option disabled>Choose...</option>
                                            <option value='0'>Isku Bedel</option>
                                            <option value='1'>Ka Iibsasho</option>
                                            <option value='2'>U Iibin</option>
                                        </Field>
                                    </div>

                                    <div className='d-flex justify-content-center mt-5'>
                                        <button className='btn btn-danger' type='submit'>Save & Next</button>
                                        <button className='btn btn-outline-warning ml-4' type='reset'>Reset</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Formik>

                    <div className={`card col shadow-sm mh-100 ml-4 p-0 ${!nextForm && 'card-disabled'}`}>
                        <div className='card-header'>Ka Qabashada P2</div>
                        <div className='card-body'>
                            <form className='pl-4 pr-4'>
                                <div>
                                    <div className='form-group'>
                                        <label htmlFor="ownership_time">Ownership Time :</label>
                                        <input className='form-control' id='ownership_time' type='text'/>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <div className="form-group flex-grow-1">
                                            <label htmlFor="imei_1">IMEI 1 :</label>
                                            <input className='form-control' id='imei_1' type='number'/>
                                        </div>
                                        <div className="form-group flex-grow-1 ml-4">
                                            <label htmlFor="imei_2">IMEI 2 :</label>
                                            <input className='form-control' id='imei_2' type='number'/>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="item_name">Item Name :</label>
                                        <input className='form-control' id='item_name' type='text'/>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <div className="form-group flex-grow-1">
                                            <label htmlFor="price">Price :</label>
                                            <div className="input-group p-0">
                                                <div className='input-group-prepend'>
                                                    <div className="input-group-text">$</div>
                                                </div>
                                                <input className='form-control' id='price' type='number'/>
                                            </div>
                                        </div>
                                        {/*{*/}
                                        {/*    service === '2' &&*/}
                                        {/*    (*/}
                                        {/*        <div className="form-group flex-grow-1 ml-4">*/}
                                        {/*            <label htmlFor="commission">Commission :</label>*/}
                                        {/*            <input className='form-control' id='commission' type='text'/>*/}
                                        {/*        </div>*/}
                                        {/*    )*/}
                                        {/*}*/}
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end m-3'>
                                    <button className='btn btn-outline-danger'>Back</button>
                                    <button className='btn btn-outline-warning ml-4' type='reset'>Reset</button>
                                    <button className='btn btn-danger ml-4' onClick={handleNext}>Save & Finish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-lg-4 col-md-12 p-4">
                <QuickDetails/>
            </div>
        </>
    );
};

export default Registration;
