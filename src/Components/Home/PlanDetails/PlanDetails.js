import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './PlanDetails.css'

const PlanDetails = () => {
    const {id}=useParams();
    const{user}=useAuth();
    const [planDetails,setPlanDetails]=useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history=useHistory();
    useEffect(()=>{
        const uri=`https://serene-tor-03532.herokuapp.com/plans/${id}`
        axios.get(uri)
        .then(res=>setPlanDetails(res.data))
    },[])

    const {title,description,img}=planDetails

    const onSubmit=data=>{
        data.productId=id;
        data.email=user.email;
        data.name=user.displayName;
        data.status='Pending';
        console.log(data);
        const uri="https://serene-tor-03532.herokuapp.com/orders";
        axios.post(uri,data)
        .then(res=> {
            if(res.data.insertedId){
                alert('Booking Placed Successfully');
                history.push('/home');
            }
        })

    }
    return (
        <div className='container'>
            <div className="row row-cols-lg-2 row-cols-1 py-5">
                <div className="col planDetails-content p-5">
                     <h1 className='border-bottom border-success border-4'>{title}</h1>
                     <h4>{description}</h4>
                </div>
                <div className="col">
                    <img src={img} className='w-100' alt="" />
                </div>
            </div>

            <h1>Order Review</h1>
            <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label class="form-label" >Name: </label>
      <input defaultValue={user.displayName}  class="form-control" {...register("name")} disabled />
      <label class="form-label">Email: </label>
      <input defaultValue={user.email} class="form-control" {...register("email")} disabled />
      
      <div>
    {/* include validation with required or other standard HTML validation rules */}
      <label class="form-label">Address: </label>
      <input class="form-control" {...register("address", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.address && <span style={{color:'red'}}><b>This field is required</b></span>}
      </div>

     <div>
    {/* include validation with required or other standard HTML validation rules */}
      <label class="form-label">City: </label>
      <input class="form-control" {...register("city", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.city && <span style={{color:'red'}}><b>This field is required</b></span>}
     </div>
      
      <input type="submit" value='Place Order' className='btn btn-primary my-4' />
    </form>
            </div>
            
        </div>
    );
};

export default PlanDetails;