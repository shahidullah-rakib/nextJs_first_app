// 'use client';

import { useRouter } from "next/router";
import { useEffect, useState } from "react"

// import Link from "next/link";

export default function InstituteDetails() {
    const [userInfo, setUserInfo] = useState();
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;
        async function getUserById(id) {
            const data = await fetch(`http://localhost:5001/user/${id}`);
            setUserInfo(await data.json());
        }
        getUserById(id)
    }, [router.query.id])

    console.log(userInfo)

    return (
        <div>
            <h4>Institute</h4>

        </div>
    )
}