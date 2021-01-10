import React, {useEffect, useState} from 'react';
import {connect, ErrorMessage, Field, Form, Formik} from "formik";
import * as Yub from 'yup'
import './styles.css'

const initialState = {
    name: '',
    phone: '',
    sender: '',
    service: '1',
    identity: '',
    identityType: '1',
    photo: ''
}

const validationSchema = Yub.object({
    name: Yub.string().required('Required'),
    phone: Yub.string().required('Required'),
    sender: Yub.string().required('Required'),
    identity: Yub.string().required('Required'),
    identityType: Yub.string().required('Required'),
    photo: Yub.string().required('Photo')
})

const Registration = () => {

    const [showDhaxalSuge, setShowDhaxalSuge] = useState(false)
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
            <div className="p-4">
                <div className='d-flex flex-column flex-md-row w-100 m-0'>

                    {/* Form 1 */}
                    <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={onSubmitForm1}>
                        <div className={`card w-100 shadow-sm h-auto p-0 ${nextForm && 'card-disabled'}`}>
                            <div className='card-header'>Ka Qabashada P1</div>
                            <div className='card-body'>
                                <Form className='pl-4 pr-4'>
                                    <div className="form-group">
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="name">Name :</label>
                                            <ErrorMessage name='name'>
                                                {error => {
                                                    return <span className='text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <Field className='form-control' id='name' name='name' type='text'/>
                                    </div>

                                    <div className='row'>
                                        <div className='form-group col'>
                                            <div className='d-flex justify-content-between align-items-start'>
                                                <label htmlFor="phone">Phone No:</label>
                                                <ErrorMessage name='phone'>
                                                    {error => {
                                                        return <span
                                                            className='text-right text-danger'>{error} *</span>
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

                                        <div className="form-group col">
                                            <div className='d-flex justify-content-between'>
                                                <label htmlFor="received_by">Receiver:</label>
                                                <ErrorMessage name='sender'>
                                                    {error => {
                                                        return <span className='text-danger'>{error} *</span>
                                                    }}
                                                </ErrorMessage>
                                            </div>
                                            <Field name='sender' className='form-control' id='received_by' type='text'/>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="service">Service :</label>
                                            <ErrorMessage name='service'>
                                                {error => {
                                                    return <span className='text-danger'>{error} *</span>
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

                                    <div className='d-flex justify-content-between align-items-end w-100'>
                                        <div className='form-group'>
                                            <div className='d-flex justify-content-between'>
                                                <label htmlFor="identity">National ID :</label>
                                                <ErrorMessage name='identity'>
                                                    {error => {
                                                        return <span className='text-danger'>{error} *</span>
                                                    }}
                                                </ErrorMessage>
                                            </div>
                                            <Field disabled={initialState.identityType === '2'} name='identity' className='form-control' id='identity' type='text'/>
                                        </div>

                                        <div className='form-group ml-4'>
                                            <HandleFieldChange name="identityType" onChange={value => {
                                                setShowDhaxalSuge(value === '2');
                                            }}
                                            />
                                            <Field component='select' name='identityType'
                                                   className='form-control'
                                                   id='identityType'>
                                                <option value='1'>National ID</option>
                                                <option value='2'>Telesom Dh. Suge</option>
                                            </Field>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="photo">Upload Photo :</label>
                                            <ErrorMessage name='photo'>
                                                {error => {
                                                    return <span className='text-danger'>{error} *</span>
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <div className="custom-file mb-3">
                                            <Field type="file" className="custom-file-input" id="photo" name='name'/>
                                            <label className="custom-file-label" htmlFor="validatedCustomFile">Choose
                                                file...</label>
                                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center my-3'>
                                        <button className='btn btn-danger' type='submit'>Save & Next</button>
                                        <button className='btn btn-outline-warning ml-4' type='reset'>Reset</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Formik>


                    {/* Form 2 */}
                    <div
                        className={`card w-100 ml-md-4 mt-sm-4 mt-md-0 shadow-sm h-auto p-0 d-none ${showDhaxalSuge && 'd-block'}`}>
                        <div className='card-header'>Ka Qabashada P2</div>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Magaca Dh. Sugaha 1aad'/>
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Numberka Dh. Sugaha 1aad'/>
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Magaca Dh. Sugaha 2aad'/>
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Numberka Dh. Sugaha 2aad'/>
                                </div>

                                <div className='d-flex justify-content-center my-3'>
                                    <button className='btn btn-danger' type='submit'>Save</button>
                                    <button className='btn btn-outline-warning ml-4' type='reset'>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Form 3 */}
                    <div
                        className={`card w-100 ml-md-4 mt-sm-4 mt-md-0 shadow-sm h-auto p-0 ${!nextForm && 'card-disabled'}`}>
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
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center m-3'>
                                    <button className='btn btn-outline-danger'>Back</button>
                                    <button className='btn btn-outline-warning ml-4' type='reset'>Reset</button>
                                    <button className='btn btn-danger ml-4' onClick={handleNext}>Save & Finish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

const HandleFieldChange = connect(
    ({
         name,
         formik: {
             values: {[name]: value},
         },
         onChange,
     }) => {
        useEffect(() => {
            onChange(value);
        }, [onChange, value]);
        return null;
    }
);

export default Registration;
