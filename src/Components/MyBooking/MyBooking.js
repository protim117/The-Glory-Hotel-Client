import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button,Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyBookingTable from './MyBookingTable';

const MyBooking = () => {
    const {user,isLoading}=useAuth();
    const [myBooking,setMyBooking]=useState([]);

    useEffect(()=>{
        // loading my booking
        const uri=`https://serene-tor-03532.herokuapp.com/orders?email=${user.email}`;

        axios.get(uri)
        .then(res=> setMyBooking(res.data))
    },[isLoading])

    // Handaling delete button 

    const handleDelete=id=>{
       const proceed=window.confirm('Are you sure to delete this booking?');
       if(proceed){
        const uri=`https://serene-tor-03532.herokuapp.com/orders/${id}`
        axios.delete(uri)
        .then(res=> 
            {
                if(res.data.deletedCount){
                    alert('Deleted Successfully');
                    const remaining= myBooking.filter(order=> order._id!==id);
                    setMyBooking(remaining)
                }
            })
       }
    }

// Added a spinner if my spinner group doesnt work although it is unnecessarry 
if(isLoading){
    return(<div>
        <Button variant="warning" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        /> 
        Loading...
      </Button>
        </div>)
}

    return (
        <div className='container table-responsive manage-height'>
           <h1>All my order</h1>
           <table class="table table-success table-striped"> 
           <thead>
                <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Name</th>
                <th scope="col">Delete?</th>
                </tr>
            </thead>
            <tbody>
            {
                myBooking.map(booking=><MyBookingTable key={booking._id} booking={booking} handleDelete={handleDelete}></MyBookingTable>)
            }
            </tbody>
            </table>
        </div>
    );
};

export default MyBooking;