// 'use client';

import Link from 'next/link'
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '../../business_logic/authSlice';


export default function Login() {

    const router = useRouter();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Dispatch the login action with the username and password
        const success = await dispatch(login({ username, password }));

        if (success) {
            // If login is successful, redirect to the home page
            router.push('/components/dashboard/dashboard');
        } else {
            // If login fails, display an error message
            console.log('Login failed');
            //Router.push('/components/dashboard/dashboard')
        }
    };


    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.get('http://localhost:5000/user');
    //       const users = response.data;
    //       const user = users.find(user => user.username === username && user.password === password);
    //       if (!user) {
    //         setError('Invalid username or password');
    //         return;
    //       }
    //     //   const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
    //     //   localStorage.setItem('token', token);
    //     //   window.location.href = '/dashboard';
    //     console.log("login success")
    //     } catch (error) {
    //       console.error(error);
    //       setError('An error occurred while logging in');
    //     }
    //   };



    return (
        <div>

            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className="col-md-auto col-md-5">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Login</h3>
                                <form className="max-width-auto" onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input name="con_name" type="text" placeholder="Username or email *" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        {/* <label>Username or email *</label> */}
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-group">
                                        <input name="register_password" type="password" placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {/* <label>Password *</label> */}
                                        <span className="focus-border"></span>
                                    </div>

                                    <div className="row mb--30">
                                        <div className="col-lg-6">
                                            <div className="rbt-checkbox">
                                                <input type="checkbox" id="rememberme" name="rememberme" />
                                                <label >Remember me</label>
                                                {/* for="rememberme" */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="rbt-lost-password text-end">
                                                <a className="rbt-btn-link" href="#">Lost your password?</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit-group">
                                        <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Log In</span>
                                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                            </span>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}
