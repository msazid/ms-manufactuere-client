import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch(`https://ms-management124.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfiles(data[0])
            }
            )
    }, [user])
    const [updateProfileButton, setUpdateProfileButton] = useState(true)
    // const [saveProfileButton, setSaveProfileButton] = useState(false)
    const editProfile = (e) => {
        e.preventDefault()

        setUpdateProfileButton(false)
    }

    const saveProfile = (e) => {


        const address = e.target?.address.value
        const email = user?.email
        const phone = e.target?.phone.value
        const social = e.target?.social.value
        const education = e.target?.education.value
        const UpdateProfile = { social, email, phone, education, address }
        // console.log(e.target?.address.value);
        // console.log(e.target?.education.value);
        // console.log(e.target?.phone.value);
        // console.log(e.target?.social.value);
        const url = `https://ms-management124.herokuapp.com/users/${user?.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProfile)
        })
            .then((res) => res.json())
            .then((data) => {

                setProfiles(UpdateProfile);
                console.log('data success', data);
                Swal.fire({
                    icon: 'success',
                    text: 'Profile Updated Successfully'
                })

            });
        setUpdateProfileButton(true)
        e.preventDefault()
    }
    return (
        <div className='my-3'>
            <h1 style={{ fontSize: '22px', textTransform: "uppercase", color: '#005555' }}>{user?.displayName || 'No Username Found'}</h1>
            <hr />
            <h5 className='mb-5' style={{ fontFamily: 'lato' }}><span className='text-uppercase me-2'>User-email:</span> <span className='text-success fw-bold'>{user?.email}</span></h5>
            <form onSubmit={saveProfile} className='d-flex mb-2 mx-auto flex-column user-profile-container'>

                <div className='row d-flex justify-content-between'>
                    <div className=' col-md-6 text-center '>
                        {updateProfileButton === true ? <h4 style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }} className=' mb-3'><span className='fw-bold  border-3'>Address : <br /></span> <span style={{ fontSize: '18px' }}>{profiles?.address}</span></h4> : <input required name='address' className='form-control mb-2' placeholder='address' />}
                        {updateProfileButton === true ? <h4 style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }} className=' mb-3'> <span className='fw-bold  border-3'>Education:</span> <br /> <span style={{ fontSize: '18px' }}>{profiles?.education}</span> </h4> : <input required className='form-control mb-2' placeholder='education' name='education' />}
                    </div>
                    <div className=' col-md-6 text-center'>
                        {updateProfileButton === true ? <h4 style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }} className=' mb-3'><span className='fw-bold  border-3'>Phone:</span> <br /> <span style={{ fontSize: '18px' }}>{profiles?.phone} </span> </h4> : <input required className='form-control mb-2' placeholder='phone number' name='phone' />}
                        {updateProfileButton === true ? <h4 style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }} className=' mb-3'><span className='fw-bold  border-3'>Social-Link:</span> <br /> <span style={{ fontSize: '18px' }}>{profiles?.social} </span> </h4> : <input required className='form-control mb-2' placeholder='Linkedin: ' name='social' />}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    {
                        updateProfileButton === true ? <button
                            form-control
                            className='mb-5 btn border border-2 text-uppercase' onClick={editProfile}>Update profile</button> : <>
                            <button type='submit' className='mb-5 text-uppercase btn btn-success' >Save Changes</button>
                            <button className='mb-5 ms-3 text-uppercase btn btn-danger' onClick={() => { setUpdateProfileButton(true) }}>Cancel</button>
                        </>
                    }
                </div>
            </form>
        </div>
    );
};

export default MyProfile;