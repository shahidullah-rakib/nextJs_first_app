'use client';

import Link from "next/link";

export default function UniversityHome() {

    return (
        <div className="container mx-auto">
            <h4>Welcome</h4>

            <Link href='auth/login'>
                <button type="submit" className="rbt-btn btn-md hover-icon-reverse w-50">

                    <span className="btn-text">Login</span>

                </button>
            </Link>

            <Link href='auth/registration'>
                <button type="submit" className="rbt-btn btn-md hover-icon-reverse w-50">

                    <span className="btn-text">Register</span>

                </button>
            </Link>

        </div>
    )
}
