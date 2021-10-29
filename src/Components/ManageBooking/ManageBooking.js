import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react';
import ManageBookingTable from './ManageBookingTable';
import './ManageBooking.css'

const ManageBooking = () => {
    const[allBooking,setAllBooking]=useState([]);
    let btnRef = useRef();;

    useEffect(()=>{
        const uri=`https://serene-tor-03532.herokuapp.com/orders`
        axios.get(uri)
        .then(res=> setAllBooking(res.data))
    },[allBooking])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete this booking?');
        if(proceed){
         const uri=`https://serene-tor-03532.herokuapp.com/orders/${id}`
         axios.delete(uri)
         .then(res=> 
             {
                 if(res.data.deletedCount){
                     alert('Deleted Successfully');
                     const remaining= allBooking.filter(order=> order._id!==id);
                     setAllBooking(remaining)
                 }
             })
        }
     }
     const handleStatus=id=>{
         
        const uri=`https://serene-tor-03532.herokuapp.com/orders/${id}`;
        const updatedBook=allBooking.find(booking=> booking._id===id)
        updatedBook.status='Approved';
        
        axios.put(uri,updatedBook)
        .then(res=> {
            if(res.data.modifiedCount){
                alert('Booking Approved');
            }
        })
      
     }
    return (
        <div  className='container table-responsive manage-height'>
            <h1>Manage All Order</h1>
            <table class="table table-success table-striped"> 
           <thead>
                <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                <th scope="col">Delete?</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBooking.map(booking=> <ManageBookingTable booking={booking} handleDelete={handleDelete}  handleStatus={handleStatus}></ManageBookingTable>)
                }
            </tbody>
                </table>
        </div>
    );
};

export default ManageBooking;