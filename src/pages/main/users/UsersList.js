import React from 'react';
import Styles from './styles.module.css'

import users from './users'
import STATUS_OFFLINE from './users'

const UsersList = () => {
    return (
        <div className="card shadow-sm">
            <div className='card-header'>All Users</div>
            <ul className='list-group list-group-flush p-2'>
                {
                    users.map(user => {
                        return (
                            <li key={user.id} className='list-group-item p-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='mr-4 position-relative'>
                                            <img className={`${Styles.avatar} border border-secondary rounded-circle h-100`} src={user.avatar} alt=""/>
                                            <span className={`${Styles.status} ${user.status === STATUS_OFFLINE && Styles.statusOffline}`}  />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <p className={`${Styles.username} m-0`}>{user.name}</p>
                                            <p className={`${Styles.phone} m-0 mt-1`}>{user.phone}</p>
                                        </div>

                                    </div>
                                    <div className={`${Styles.location} d-flex justify-content-start align-items-center w-25`}>
                                        <i className='fa fa-map-marker-alt mr-2' />
                                        <p className='m-0'>{user.location}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default UsersList;
