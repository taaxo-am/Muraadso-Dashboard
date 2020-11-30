import React from 'react';
import './styles.css'
import ic_new_customer from "./user1.png";
import ic_awaiting_process from "./user2.png";
import ic_on_hold from "../img/ic_on_hold.png";
import ic_not_paid from "../img/ic_not_paid.png";
import ic_rejected from "../img/ic_rejected.png";

const users = [
    {
        id: 1,
        name: 'Xamse Yare',
        role: 'ADMIN',
        location: 'Qaloocan',
        img: ic_new_customer
    },
    {
        id: 2,
        name: 'Yasir Yare',
        role: 'FINANCE',
        location: 'Baki',
        img: ic_awaiting_process
    },
    {
        id: 3,
        name: 'Axmed Axmed',
        role: 'ASSISTANT',
        location: 'Hargeisa',
        img: ic_on_hold
    },
    {
        id: 4,
        name: 'Muraadso',
        role: 'ACCOUNTANT',
        location: 'Agabar',
        img: ic_not_paid
    },
]

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
                                        <img className='avatar mr-4 h-100' src={user.img} alt=""/>
                                        <div className='d-flex flex-column'>
                                            <p className='username m-0'>{user.name}</p>
                                            <p className='role m-0'>{user.role}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center w-25 location'>
                                        <i className='fa fa-map-marker-alt mr-2' />
                                        <p className='location m-0'>{user.location}</p>
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
