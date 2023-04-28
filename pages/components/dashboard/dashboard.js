import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import Institute from '../../institute';
// import InstituteDetails from '../../institute/details/[details]';

const Dashboard = ({ users }) => {
    // const token=localStorage.getItem(`token`)
    // localStorage.removeItem(`token`)

    // const navigate = useNavigate();
    const [allUser, setAllUser] = useState([])
    const router = useRouter();
    useEffect(() => {
        setAllUser(users)
    }, [])
    // setAllUser(users.users)
    console.log("All users", users)
    console.log("users", users.map(user => user))
    // setAllUser(users.map(user => user))

    // const getAlluser = () => {
    //     axios.get('http://localhost:5001/user', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Accept": 'application/json',
    //             // "Authorization": `bearer ${token}`
    //         }
    //     })
    //         .then(response => {
    //             setAllUser(response.data);
    //             console.log(response.data);

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }
    // useEffect(() => {
    //     getAlluser();

    // }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(response => {
                getAlluser();
            })
            .catch(error => {
                console.error(error);
            });

        console.log(id);
    }
    return (
        <div>
            <h4 className='text-center'>University Information</h4>
            <button className='btn btn-success m-2' onClick={() => router.push('/institute/add')}>Add University</button>
            {/* <button className='btn btn-success' onClick={() => navigate("/addcourses")}>Add New Courses</button> */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">University Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><Link href={`/institute/details/${users.id}`}>{users.uvname}</Link> </td>
                                    <td>{users.location}</td>
                                    {/* <td>{user.is_staff ? 'Admin' : 'Student'}</td> */}
                                    <td>
                                        <button className='btn btn-success m-2' onClick={() => router.push(`/institute/${users.id}`)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                                        {/* <button className='btn btn-danger'>Delete</button> */}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

// export async function getServerSideProps(context) {
//     let data = await axios.get('http://localhost:5001/user', {
//         headers: {
//             'Content-Type': 'application/json',
//             "Accept": 'application/json',
//             // "Authorization": `bearer ${token}`
//         }
//     })
//         .then(response => {
//             setAllUser(response.data);
//             console.log(response.data);

//         })
//         .catch(error => {
//             console.error(error);
//         });

//     let myprops = await data.json()

//     return {
//         props: { myprops }, // will be passed to the page component as props
//     }
// }

export async function getServerSideProps() {
    try {
        const response = await axios.get('http://localhost:5001/user');
        const users = response.data;
        return {
            props: { users }
        }

    } catch (error) {
        console.log(error);
        return {
            props: { users: [] }
        }
    }
}

export default Dashboard;
