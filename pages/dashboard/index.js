'use client';

import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="container mx-auto">
            <h4>Dashboard</h4>

            <Link href='institute'>
                <button type="submit" className="rbt-btn btn-md hover-icon-reverse w-50">

                    <span className="btn-text">Institute</span>

                </button>
            </Link>
        </div>
    )
}
