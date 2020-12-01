import React from 'react';
import './styles.css'

const DataTable = ({rows, columns}) => {

    return (
        <div className='scroller'>
            <table className='table table-borderless h-75 table-hover'>
                <thead className='card-header text-center'>
                {
                    columns.map(col => {
                        return (
                            <th>{col}</th>
                        )
                    })
                }
                </thead>
                <tbody>
                {
                    rows.map(obj => {
                        const keys = Object.keys(obj)
                        return (
                            <tr key={obj.id}>
                                {
                                    keys.map(key => {
                                        if (key !== keys[0])
                                            return (
                                                <td key={key} className='border'>
                                                    <span
                                                        className={`${key === 'status' && `product-status border ${obj.status === "Paid" && 'paid'} ${obj.status === "Checking" && 'checking'}`}`}>
                                                        {obj[key]}
                                                    </span>
                                                </td>
                                            )
                                    })
                                }
                            </tr>
                        )
                    })

                }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
