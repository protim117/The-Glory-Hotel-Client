import React, { useState } from 'react';

const ManageBookingTable = (props) => {
  
    const{booking,handleDelete,handleStatus}=props;
    const {_id,name,productId,status}=booking;
    // for making the approve button disable after one click
    const [double, setDouble] = useState(false);
    
    return (
        <tr>
        <th scope="row">{productId}</th>
        <td>{name}</td>
        <td>{status==='Approved'? <div><i className="fas fa-check-circle text-success fs-4 mt-2">{status}</i> </div> : <div><i className="fas fa-spinner text-info fs-4"></i> {status}</div>}</td>
        <td>
        <button className="btn btn-warning text-white"  disabled={double} onClick={()=>{handleStatus(_id); setDouble(true)}}>Approve</button>
        </td>
        <td>
            <button className='btn btn-danger' onClick={()=>handleDelete(_id)}>Delete
            </button></td>
     </tr>
    );
};

export default ManageBookingTable;