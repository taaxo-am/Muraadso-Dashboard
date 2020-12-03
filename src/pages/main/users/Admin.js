import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import DataTable from "../../../components/datatable/DataTable";
import products from "../home/products";

import Styles from './styles.module.css'
import UsersList from "./UsersList";

import users from './users'

const Admin = () => {
    const columns = ['Products', 'Status', 'Sell Price']

    return (
        <>
            <div className="col-lg-8 order-5 col-md-12 p-4">

                <div className='row m-0'>
                    <div className='row col-12 col-md-6 m-0'>
                        <button className='btn btn-danger' data-toggle="modal" data-target="#showRoomModal">New
                            Show Room
                        </button>
                        <button className='btn btn-outline-danger ml-md-3'>Manage Show
                            Rooms
                        </button>
                    </div>

                    <div className='col-12 col-md-6 mt-4 mt-md-0 d-flex'>
                        <select className='form-control ml-md-3'>
                            <option value="1">-- Select Show Room --</option>
                        </select>

                        <select className='form-control ml-3'>
                            <option value="1">Last Week</option>
                        </select>
                    </div>

                </div>

                <div className='card mt-4 shadow-sm '>
                    <div className='card-body p-0'>
                        <DataTable rows={products} columns={columns}/>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 order-1 col-md-12 p-4">
                <div className='mb-4'>
                    <button className='btn btn-danger' data-toggle="modal" data-target="#userModal">New User
                    </button>
                    <button className='btn btn-outline-danger ml-3' data-toggle="modal"
                            data-target="#manageUsersModal">Manage Users
                    </button>
                </div>
                <UsersList/>
            </div>

            {/* New User Modal */}

            <div className='modal fade' id="userModal" tabIndex="-1" role="dialog"
                 aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ml-4" id="userModalLabel">New User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='pl-4 pr-4'>
                                <div className='d-flex'>
                                    <div className='form-group'>
                                        <label htmlFor="full_name">Full Name:</label>
                                        <input type="text" name='full_name' className='form-control'/>
                                    </div>
                                    <div className='form-group ml-3'>
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" name='username' className='form-control'/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name='email' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name='password' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="repeat_password">Repeat Password:</label>
                                    <input type="password" name='repeat_password' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="repeat_password">Show Room Location:</label>
                                    <select className='form-control mb-4' value='0'>
                                        <option value='0'>--- Select Show Room Location ---</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manage Users Modal */}

            <div className='modal fade' id="manageUsersModal" tabIndex="-1" role="dialog"
                 aria-labelledby="manageUsersModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ml-4" id="manageUsersModalLabel">Manage Users</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <div className='d-flex flex-column'>
                                    {
                                        users.map(user => {
                                            return (
                                                <div className='bg-light shadow-sm border rounded mt-2 mb-2 pb-3'>
                                                    <div className='row align-items-center pl-4 pr-4 pt-5 pb-1'>
                                                        <div
                                                            className='d-flex col-3 align-self-start justify-content-center'>
                                                            <img className='border border-secondary rounded-circle w-50'
                                                                 src={user.avatar} alt=""/>
                                                        </div>
                                                        <div className="col-7 d-flex flex-column align-self-start">
                                                            <h6 className={Styles.username}><i
                                                                className='fa fa-user-alt mr-2'/>{user.name}</h6>
                                                            <p className={Styles.phone}><i
                                                                className='fa fa-phone-alt mt-4 mr-2'/>{user.phone}</p>
                                                            <p className={Styles.location}><i
                                                                className='fa fa-map-marker-alt mt-2 mr-2'/>{user.location}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className='col-2 d-flex justify-content-around align-self-start'>
                                                            <i className='fa fa-edit p-3 lightHover mt-1'/>
                                                            <i className='fas fa-trash p-3 lightHover mt-1'/>
                                                        </div>
                                                    </div>
                                                    <hr className='text-light bg-light'/>
                                                </div>
                                            )
                                        })
                                    }
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

            {/* Show Room Modal */}

            <div className='modal fade' id="showRoomModal" tabIndex="-1" role="dialog"
                 aria-labelledby="showRoomModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ml-4" id="showRoomModalLabel">New Show Room</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='pl-4 pr-4'>
                                <div className='form-group'>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" name='name' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="location">Location:</label>
                                    <input type="text" name='location' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="code">Campus Code:</label>
                                    <input type="text" name='code' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" name='address' className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="manager">Manager:</label>
                                    <input type="text" name='manager' className='form-control'/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
