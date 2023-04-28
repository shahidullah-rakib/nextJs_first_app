import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';


const InstituteUpdate = () => {
    // const navigate = useNavigate();


    // const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        id: null,
        uvname: '',
        location: '',
    });
    const router = useRouter();
    const id = router.query['id'];

    // const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5001/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(response => {
                // setUser(response.data);
                // console.log("Api data for update", response.data)
                setFormData({
                    id: response.data.id,
                    uvname: response.data.uvname,
                    location: response.data.location,
                })

            })
            .catch(error => {
                console.error(error);
            });

    }, [id])

    console.log("Data fetch", formData)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:5001/user/${id}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(() => {
                // navigate('/dashboard'); // navigate to the users page on success
                console.log("update successfully");
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("Data fetch", formData)
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className='main-box'>
                <div className='row'>
                    <div className='col-md-12 text-center'> <h1>Update User Page</h1></div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>University Name:</div>
                    <div className='col-md-6'>
                        <input
                            type="text"
                            name='uvname'
                            value={formData.uvname}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>Location:</div>
                    <div className='col-md-6'>
                        <input
                            type="text"
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <input type="submit" name='submit' className='btn btn-success' value="Update User" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default InstituteUpdate;



// InstituteUpdate