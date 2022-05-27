import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../Firebase/Firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css'
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user || guser)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    useEffect(()=>{
        if(token){
            navigate(from,{replace:true})
        }
    },[token,from,navigate])
    
    if (loading || gLoading || sending) {
        return <Loading />
    }

    if(error||gerror){
        Swal.fire({
            icon:'error',
            title:'Something wents wrong !',
            text:`${error.message || gerror.message}`
        })
    }
    const onSubmit = data => {
        console.log(data.email, data.password);
        signInWithEmailAndPassword(data.email, data.password);
    };
    const resetPassword = async (data) => {
        if (data.email) {
            await sendPasswordResetEmail(data.email);
        }
    }
    return (
        <div className='logInBG d-flex align-items-center'>
            <div className="login py-5 container text-center">
                <form className='mx-auto mb-3 ' style={{ width: "350px" }} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='py-3' style={{ fontFamily: 'lato', color: 'white', fontSize: '25px', textTransform: 'uppercase' }}>Have an account ?</h1>
                    <input placeholder='Email' className='border-0 border-bottom mx-auto py-2 loginForm form-control mb-3' type='email' {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                    <input placeholder='Password' className='mx-auto border-0 border-bottom py-2 loginForm form-control mb-3' type='password'{...register("password", { required: true })} />
                    <input className='btn loginBtn' type="submit" value='Login' />
                </form>
                <Link to='/register' style={{ textDecoration: 'none', color: 'wheat' }}>Create New Account</Link> <br />
                <button className='my-2' style={{ color: "wheat", background: 'transparent', border: 'none' }} onClick={resetPassword}>Forgot Password ?</button>
                <p style={{ color: "wheat" }} className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                <button className='py-2 px-3' onClick={() => signInWithGoogle()} style={{ color: "wheat", background: 'transparent', border: '2px solid' }}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;