import { useState } from "react"

// 'use client'
export default function Registration() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerHandle = (e) => {
        e.preventDefault()
        console.log(username, email, password)
        // console.table(username,email,password)
    }

    return (
        <div>

            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className="col-md-auto col-lg-6">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <h3 className="title">Register</h3>
                                <form className="max-width-auto">
                                    <div className="form-group">
                                        <input name="register-email" type="text" placeholder="Email address *" value={username} on onChange={(e) => setUsername(e.target.value)} />
                                        {/* <label>Email address *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input name="register_user" type="text" placeholder="Username *" value={email} on onChange={(e) => setEmail(e.target.value)} />
                                        {/* <label>Username *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input name="register_password" type="password" placeholder="Password *" value={password} on onChange={(e) => setPassword(e.target.value)} />
                                        {/* <label>Password *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-group">
                                        <input name="register_conpassword" type="password" placeholder="Confirm Password *" />
                                        {/* <label>Confirm Password *</label> */}
                                        {/* <span className="focus-border"></span> */}
                                    </div>

                                    <div className="form-submit-group">
                                        <button onClick={registerHandle} type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
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
