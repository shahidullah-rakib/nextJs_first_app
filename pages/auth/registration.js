// 'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Registration() {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.log("Passwords don't match")
            return "Passwords don't match";
        }

        //   if (password.length < 8) {
        //     return 'Password should be at least 8 characters long';
        //   }

        //   if (!/\d/.test(password)) {
        //     return 'Password should contain at least one number';
        //   }

        //   if (!/[!@#$%^&*]/.test(password)) {
        //     return 'Password should contain at least one special character';
        //   }
        else {
            try {
                const response = await axios.post('http://localhost:5000/user', {
                    username,
                    firstName,
                    lastName,
                    email,
                    phone,
                    password
                });

                console.log("Register Successfull", response.data);
            } catch (error) {
                console.error(error);
            }
        }


    };

    // const [state, useState] = useState({
    //     userName: "",
    //     email: "",
    //     password: "",
    // })

    // const [error, setError] = useState("");

    // const {userName, email, password } = state;

    // let dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(loadUsers());
    // },[]);

    // const handleInputChange = (e) =>{
    //     let {name, value} =e.target;
    //     setState({...state, [name]:value});
    // }

    // const handleRegistrationSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(state)
    //     if(!userName || !email || !password){
    //         setError("Please Fill all the field")
    //     }

    //   };



    return (
        <div>

            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className="col-md-auto col-lg-6">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Register</h3>
                                <form onSubmit={handleSubmit} className="max-width-auto">

                                    <div className="form-group">
                                        <input
                                            name="register_user"
                                            type="text"
                                            placeholder="Username *"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                        {/* <label>Username *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register_user"
                                            type="text"
                                            placeholder="First Name *"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                        />
                                        {/* <label>Username *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register_user"
                                            type="text"
                                            placeholder="Last Name *"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                        {/* <label>Username *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register-email"
                                            type="email"
                                            placeholder="Email address *"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        {/* <label>Email address *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register-email"
                                            type="text"
                                            placeholder="Phone Number *"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                        {/* <label>Email address *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register_password"
                                            type="password"
                                            placeholder="Password *"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        {/* <label>Password *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            name="register_password"
                                            type="password"
                                            placeholder="Confirm Password *"
                                            value={confirmPassword}
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                        {/* <label>Password *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>
                                    <div className="col-lg-6 mb-5 p-0">
                                        <div className="rbt-lost-password text-end">
                                            <a className="rbt-btn-link" href="#">Already Have a Account Please Login</a>
                                        </div>
                                    </div>

                                    <div className="form-submit-group">
                                        <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Register</span>
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
