import React from 'react';
import './styles.css'

const DataTable = ({rows, columns, classes}) => {

    return (
        <div className='scroller'>
            <table className='table table-borderless h-100 table-hover'>
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
                        console.log(keys)
                        return (
                            <tr key={obj.id}>
                                {
                                    keys.map(key => {
                                        if (key !== keys[0])
                                            return (
                                                <td className='border'>
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
