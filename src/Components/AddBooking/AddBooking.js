import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddBooking = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit=data=>{
        // Adding a new booking 
        const uri=`https://serene-tor-03532.herokuapp.com/plans`;
        axios.post(uri,data)
        .then(res=> {
            if(res.data.insertedId){
                alert('Plan Added Successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <h1>Add a booking Plan</h1>

    <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label class="form-label" >Title: </label>
      <input  class="form-control" {...register("title")} />
      <label class="form-label">Description: </label>
      <input  class="form-control" {...register("description")}  />
      
      <div>
    {/* include validation with required or other standard HTML validation rules */}
      <label class="form-label">Image Url: </label>
      <input class="form-control" {...register("img", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.address && <span style={{color:'red'}}><b>This field is required</b></span>}
      </div>

     
      <input type="submit" value='Add Plan' className='btn btn-primary my-4' />
    </form>
            </div>
        </div>
    );
};

export default AddBooking;