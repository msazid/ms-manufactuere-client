import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if(user || guser){
        navigate('/')
    }
    if (loading || gLoading) {
        return <Loading />
    }
    if(error||gerror){
        Swal.fire({
            icon:'error',
            title:'Something Wents wrong',
            text:`${error.message || gerror.message}`
        })
    }
    const onSubmit = data => {
        console.log(data.displayName, data.email, data.password)
        createUserWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='logInBG d-flex align-items-center'>
            <div className="login py-3 container text-center">
                <form className='mx-auto mb-3 ' style={{ width: "450px" }} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='py-3' style={{ fontFamily: 'lato', color: 'white', fontSize: '25px', textTransform: 'uppercase' }}>Create A New Account</h1>
                    <input placeholder='user name' className='border-0 border-bottom mx-auto py-2 loginForm form-control mb-3' type='name' {...register("displayName", { required: true, maxLength: 20 })} />
                    <input placeholder='Email' className='border-0 border-bottom mx-auto py-2 loginForm form-control mb-3' type='email' {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                    <input placeholder='Password' className='mx-auto border-0 border-bottom py-2 loginForm form-control mb-3' type='password'{...register("password", { required: true })} />
                    <input className='btn loginBtn' type="submit" value='Register' />
                </form>
                <Link to='/login' style={{ textDecoration: 'none', color: 'wheat' }}>Login Here</Link> <br />
                <p style={{ color: "wheat" }} className="w-100 my-3 text-center">&mdash; Or Sign In With &mdash;</p>
                <button className='py-2 px-3' onClick={() => signInWithGoogle()} style={{ color: "wheat", background: 'transparent', border: '2px solid' }}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;