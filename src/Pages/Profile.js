import React, { useState } from 'react'
import axios from 'axios';

const registerUser = async (userData, http) => {
    try {
        // Send a POST request to your Laravel application with the CSRF token in the header
        const response = await http.post('/register', userData);
        console.log(response);
    } catch (error) {
        console.error(error); // Handle any errors
    }
};

const userData = {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: 'secret123456',
    password_confirmation: 'secret123456'
};

function Profile() {
    const http = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    async function getCsrf() {
        const csrf = await http.get('/sanctum/csrf-cookie');
        console.log(csrf);
    }
    useState(() => {
        getCsrf();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your registerUser function or perform any desired action with the userData object
        registerUser(userData, http);
    };
    // Fetch the CSRF token from your Laravel application
    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"
                    id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Profile
