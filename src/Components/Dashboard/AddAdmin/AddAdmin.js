import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://sleepy-headland-68980.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log('server', res))

        
    };
    return (
        <div className="row">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                <h1 className="mt-5 mb-5">Add an Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="form-control" {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input className="btn btn-primary form-control" type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddAdmin;
