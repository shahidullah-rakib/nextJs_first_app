'use client';

import Link from "next/link";
// import Login from "../login/login";

export default function WebHome() {



    return (
        <div className="container mx-auto">
            <h4>Welcome</h4>

            <Link href='components/login/login'>
                {/* <Link href='login_C'> */}
                <button type="submit" className="rbt-btn btn-md hover-icon-reverse w-50">

                    <span className="btn-text">Login</span>

                </button>
            </Link>

            <Link href='components/registration/registration'>
                <button type="submit" className="rbt-btn btn-md hover-icon-reverse w-50">

                    <span className="btn-text">Register</span>

                </button>
            </Link>




        </div>

    )

}





// return (
//     <div>
//         <h4>Welcome</h4>

//         <Link to="/login" > Login</Link>
//         <Link to="/register" >  Register</Link>

//     </div>
// )
