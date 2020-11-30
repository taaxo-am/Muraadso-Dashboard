import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='container-fluid vh-100'>
            <div className="row h-100">
                <div className='col-lg-5 d-lg-block d-none h-100 left-panel'/>
                <div className="col-lg-7 col-md-12 d-flex flex-column align-self-center justify-content-center w-100">
                    <h1 className='login-header text-center'>LOGIN</h1>
                    <p className='text-center text-muted'>Welcome back!. Please login to your account.</p>

                    <form className='login-form d-flex flex-column align-items-center mt-4 w-auto'>
                        <div className='form-group'>
                            <input type="text" placeholder='Username' className='form-control'/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" placeholder='Password' className='form-control'/>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Remember me?
                            </label>
                        </div>
                        <div className="form-group mt-4">
                            <Link to='/main/data'>
                                <input type="submit" value='LOGIN' className='btn btn-danger w-50'/>
                            </Link>
                        </div>
                        <a href='#' className="nav-link m-1">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
