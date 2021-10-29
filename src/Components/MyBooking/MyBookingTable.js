import axios from 'axios';
import React from 'react';

const MyBookingTable = (props) => {
    const{booking,handleDelete}=props;
    const {_id,name,productId}=booking;
    
    return (
        // table row 
            <tr>
                <th scope="row">{productId}</th>
                <td>{name}</td>
                <td><button className='btn btn-danger' onClick={()=>handleDelete(_id)}>Delete</button></td>
             </tr>
    );
};

export default MyBookingTable;