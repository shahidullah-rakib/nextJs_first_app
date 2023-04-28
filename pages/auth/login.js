// 'use client';
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/user');
            const users = response.data;
            const user = users.find(user => user.username === username && user.password === password);
            if (!user) {
                setError('Invalid username or password');
                return;
            }
            //   const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
            //   localStorage.setItem('token', token);
            //   window.location.href = '/dashboard';
            console.log("login success")
            router.push('/components/dashboard/dashboard');
        } catch (error) {
            console.error(error);
            setError('An error occurred while logging in');
        }
    };
    return (
        <div>

            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className="col-md-auto col-md-5">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Login</h3>
                                <form className="max-width-auto" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder='Username *'
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                        {/* <label>Username *</label> */}
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder='Password *'
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
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

            {/* 
    <div className="rbt-progress-parent">
        <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div> */}

        </div>
    )
}

// import { useState } from 'react';
// import axios from 'axios';
// import jwt from 'jsonwebtoken';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
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
//       console.log("login success")
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred while logging in');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
//       </div>
//       {error && <div>{error}</div>}
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// export default Login;
