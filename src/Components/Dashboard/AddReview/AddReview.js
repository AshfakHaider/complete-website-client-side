import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [imageURL, setImageURL] = useState(null);
   
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            review: data.review,
            location:data.location,
            category: data.category,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addReview`;
        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server', res))

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0ad6173cd5aeb795e482f44abb146bbe');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="row">
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 mt-5 pt-5 ms-5">
                <h3>Add a Review</h3>
                <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Your Name" {...register("name")} />
                    <br/>
                <input className="form-control" defaultValue="Your Location" {...register("location")} />
                    <br/>
                <input className="form-control" defaultValue="Your Review" {...register("review")} />
                    <br/>
                <input className="form-control" defaultValue="review" {...register("category")} />
                    <br/>
                <input className="form-control"  type="file" onChange={handleImageUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-primary" type="submit" />
            </form>
            
            </div>
        </div>
    );
};

export default AddService;
