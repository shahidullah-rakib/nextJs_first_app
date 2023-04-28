'use client';

import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function InstituteAdd() {
    const [uvname, setUvname] = useState('');
    const [location, setLocation] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/user', {
                uvname,
                location,
            });

            console.log("Data add successfully", response.data);
            router.push('/components/dashboard/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    {/* <label>University Name</label> */}
                    <input
                        type="text"
                        class="form-control"
                        placeholder="University Name"
                        onChange={(event) => setUvname(event.target.value)}
                    />
                </div>
                <div class="form-group">
                    {/* <label>Location</label> */}
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Location"
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
