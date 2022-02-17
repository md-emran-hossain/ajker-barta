import React from 'react';
import Head from 'next/head'
import { useForm } from "react-hook-form";
import useMediaQuery from '../../Shared/useMediaQuery/useMediaQuery';
import { TextField, Button, CircularProgress, } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Router from 'next/router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signInWithGoogle, registerUser, loginUser, loading } = useAuth();
    const [newName, setNewName] = React.useState("");
    const [newEmail, setNewEmail] = React.useState("");
    const [newPass, setNewPass] = React.useState("");

    const isDesktop = useMediaQuery('(min-width: 900px)');
    const location = ""


    //// Login with google 
    const handleGoogleLogin = () => {
        signInWithGoogle(location, Router);
    };

    //// handle register
    const handleRegisterSubmit = () => {
        registerUser(newEmail, newPass, newName, Router)
    }

    //// handle login
    const handleLoginSubmit = (data) => {
        console.log(data)
        loginUser(data.email, data.password, location, Router)
    };


    const imageButton = () => {
        document.querySelector('.cont').classList.toggle('s--signup');
    }

    return (
        <>
            <Head>
                <title>
                    Login
                </title>
            </Head>
            <Header></Header>
            <NavigationBar></NavigationBar>

            {loading ? <h1 className='mt-12 w-24 mx-auto'><CircularProgress /></h1>
                :
                isDesktop &&
                <div className="" style={{ height: '100vh' }}>
                    <div className="first-form drop-shadow-md">
                        <div className="cont" style={{ borderRadius: '20px' }}>
                            <div className="form sign-in bg-gray-100">
                                <div style={{ width: '60%', margin: '0 auto' }}>
                                    <h2>Welcome back,</h2>
                                    <form onSubmit={handleSubmit(handleLoginSubmit)} className='mb-4'>
                                        <TextField style={{ width: '100%' }} className="mb-2 text-center"
                                            defaultValue="admin@gmail.com"
                                            type="email" {...register("email")} label="Your Email" variant="standard" required /> <br />

                                        <TextField style={{ width: '100%' }} className="mb-4 text-center"
                                            defaultValue="123456"
                                            name="password" {...register("password")} label="Your Password"
                                            type="password"
                                            variant="standard" required />

                                        <Button className="fb-btn" type="submit" style={{ width: '100%', }} variant="outlined"><span>Login</span></Button>
                                    </form>
                                    <Button onClick={handleGoogleLogin} style={{ width: '100%' }} className="fb-btn" variant="outlined"> <span className=''>Connect with</span> <span><GoogleIcon /></span></Button>
                                </div>
                            </div>
                            <div className="sub-cont">
                                <div className="img">
                                    <div className="img__text m--up">
                                        <h2>New here?</h2>
                                        <p>Sign up and discover great amount of new opportunities!</p>
                                    </div>
                                    <div className="img__text m--in">
                                        <h2>One of us?</h2>
                                        <p>If you already has an account, just sign in. We have missed you!</p>
                                    </div>
                                    <div onClick={imageButton} className='img__btn'>
                                        <span className="m--up">Sign Up</span>
                                        <span className="m--in">Sign In</span>
                                    </div>
                                </div>
                                <div className="form sign-up bg-gray-100">
                                    <div style={{ width: '60%', margin: '0 auto' }}>
                                        <h2>Time to feel like home,</h2>
                                        <form className='mb-4'>
                                            <TextField sx={{ width: '100%' }} className="mb-2"
                                                name="name" type="text" onChange={(e) => setNewName(e.target.value)} label="Your Name" variant="standard" required />

                                            <TextField sx={{ width: '100%' }} className="mb-2"
                                                name="email" type="email" onChange={(e) => setNewEmail(e.target.value)} label="Your Email" variant="standard" required />

                                            <TextField sx={{ width: '100%' }}
                                                name="password" type="password" className="mb-4" onChange={(e) => setNewPass(e.target.value)} label="Your Password" variant="standard" required />

                                            <Button className='fb-btn' onClick={handleRegisterSubmit} style={{ width: '100%' }} variant="outlined"><span>Sign up</span></Button>
                                        </form>
                                        <Button onClick={handleGoogleLogin} style={{ width: '100%' }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* second login form  */}

            {!isDesktop && <div className="second-form-body">
                <div className="second-form ">
                    <div className="second-form-main ">
                        <input type="checkbox" id="chk" aria-hidden="true" />
                        <div className="signup">
                            <form onSubmit={handleRegisterSubmit}>
                                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                                <input type="text" name="name" onChange={(e) => setNewName(e.target.value)} placeholder="User name" required />
                                <input type="email" name="email" onChange={(e) => setNewEmail(e.target.value)} placeholder="Email" required />
                                <input type="password" name="password" onChange={(e) => setNewPass(e.target.value)} placeholder="Password" required />
                                <button type='submit'>Sign up</button>
                            </form>
                            <button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " > <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></button>
                        </div>

                        <div className="login">
                            <form onSubmit={handleSubmit(handleLoginSubmit)}>
                                <label htmlFor="chk" aria-hidden="true">Login</label>
                                <input type="email"   {...register("email")} placeholder="Email" required />
                                <input type="password"  {...register("password")} placeholder="Password" required />
                                <button type='submit'>Login</button>
                            </form>
                            <button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " > <span className=' text-white'>Connect with</span> <span><GoogleIcon /></span></button>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default Login;