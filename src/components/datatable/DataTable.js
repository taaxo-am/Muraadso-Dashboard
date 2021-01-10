import React from 'react';
import './styles.css'

const DataTable = ({rows, columns}) => {

    return (
        <table className='table table-borderless table-hover'>
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
                rows.map((obj) => {
                    const keys = Object.keys(obj)
                    return (
                        <tr key={obj.id}>
                            {
                                keys.map(key => {
                                    if (key !== keys[0])
                                        return (
                                            <td key={key} className='border'>
                                                {
                                                    key === 'action' ? (
                                                        <input type='checkbox' checked={obj.action} />
                                                    ) : (
                                                        <span
                                                            className={`${key === 'status' && `product-status border ${(obj.status === "Paid" || obj.status === "Returned") && 'paid'} ${(obj.status === "Checking" || obj.status === "Not Returned") && 'checking'}`}`}>
                                                        {obj[key]}
                                                    </span>
                                                    )
                                                }
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
    );
};

export default DataTable;
