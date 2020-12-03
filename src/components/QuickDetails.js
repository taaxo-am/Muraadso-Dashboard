import React from 'react';

import ic_new_customer from "../pages/main/img/ic_new_customer.png";
import ic_awaiting_process from "../pages/main/img/ic_awaiting_process.png";
import ic_on_hold from "../pages/main/img/ic_on_hold.png";
import ic_not_paid from "../pages/main/img/ic_not_paid.png";
import ic_rejected from "../pages/main/img/ic_rejected.png";

const data = [
    {
        id: 1,
        title: 'This Week',
        desc: '290 New Customers',
        img: ic_new_customer
    },
    {
        id: 2,
        title: 'Awaiting Process',
        desc: '49 Orders',
        img: ic_awaiting_process
    },
    {
        id: 3,
        title: 'On Hold',
        desc: '12 Orders',
        img: ic_on_hold
    },
    {
        id: 4,
        title: 'Not Paid',
        desc: '40 Items',
        img: ic_not_paid
    },
    {
        id: 5,
        title: 'Rejected',
        desc: '42 Items',
        img: ic_rejected
    },
]

const titleStyle = {
    fontWeight: '500',
    fontSize: '14px',
    color: 'rgba(0,0,0,0.4)'
}


const QuickDetails = () => {
    return (
        <div className="card shadow-sm">
            <div className='card-header'>Quick Details</div>
            <ul className='list-group list-group-flush p-2'>
                {
                    data.map(item => {
                        return (
                            <li key={item.id} className='list-group-item p-3'>
                                <div className='d-flex align-items-center'>
                                    <img className='mr-4 h-100' src={item.img} alt=""/>
                                    <p style={titleStyle} className='m-0'>{item.title}</p>
                                    <p className='m-0 flex-grow-1 text-right'>{item.desc}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default QuickDetails;
