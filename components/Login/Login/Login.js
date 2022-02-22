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
import { useRouter } from 'next/router'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signInWithGoogle, registerUser, loginUser, loading } = useAuth();
    const [newName, setNewName] = React.useState("");
    const [newEmail, setNewEmail] = React.useState("");
    const [newPass, setNewPass] = React.useState("");
    const isDesktop = useMediaQuery('(min-width: 900px)');
    const location = useRouter()
    let locationURL = ''
    if (typeof location.components === 'object') {
        locationURL = Object.keys(location.components)[2]
    }

    //// Login with google 
    const handleGoogleLogin = () => {
        signInWithGoogle(locationURL);
    };

    //// handle register
    const handleRegisterSubmit = () => {
        registerUser(newEmail, newPass, newName)
    }

    //// handle login
    const handleLoginSubmit = (data) => {
        console.log(data)
        loginUser(data.email, data.password, locationURL)
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
                        <div className="cont rounded-3xl border-2">
                            <div className="form sign-in ">
                                <div style={{ width: '60%', margin: '0 auto' }}>
                                    <h2 className='font-semibold text-red-500'>Welcome back,</h2>
                                    <form onSubmit={handleSubmit(handleLoginSubmit)} className='mb-4'>
                                        <TextField style={{ width: '100%' }} className="mb-2"
                                            type="email" {...register("email")} label="Your Email"
                                            variant="standard" required /> <br />

                                        <TextField style={{ width: '100%' }} className="mb-4"
                                            name="password" {...register("password")} label="Your Password"
                                            type="password"
                                            variant="standard" required />

                                        <Button className="fb-btn" type="submit" style={{ width: '100%', marginTop: '25px', }} variant="contained">Login</Button>
                                    </form>
                                    <Button onClick={handleGoogleLogin} style={{ width: '100%', color: 'black', position: 'relative', borderColor: '#eb3b5a', backgroundColor: 'white' }} variant="outlined"><GoogleIcon sx={{ color: '#eb3b5a', marginBottom: '3px', left: '10px', position: 'absolute' }} /> Connect with google</Button>
                                </div>
                            </div>
                            <div className="sub-cont">
                                <div className="img">
                                    <div className="img__text m--up">
                                        <h2>New here?</h2>
                                        <p>Sign up and discover great amount of news!</p>
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
                                <div className="form sign-up ">
                                    <div style={{ width: '60%', margin: '0 auto' }}>
                                        <h2 className='text-red-500'>Time to feel like home,</h2>
                                        <form className='mb-4'>
                                            <TextField color='success' sx={{ width: '100%' }} className="mb-2"
                                                name="name" type="text" onChange={(e) => setNewName(e.target.value)} label="Your Name" variant="standard" required />

                                            <TextField color='success' sx={{ width: '100%' }} className="mb-2"
                                                name="email" type="email" onChange={(e) => setNewEmail(e.target.value)} label="Your Email" variant="standard" required />

                                            <TextField color='success' sx={{ width: '100%', marginBottom: "15px" }}
                                                name="password" type="password" className="mb-4" onChange={(e) => setNewPass(e.target.value)} label="Your Password" variant="standard" required />

                                            <Button className='fb-btn' onClick={handleRegisterSubmit} style={{ width: '100%', marginTop: '25px' }} variant="contained">Sign up</Button>
                                        </form>
                                        <Button onClick={handleGoogleLogin} style={{ width: '100%', color: 'black', position: 'relative', borderColor: 'eb3b5a' }} variant="outlined"><GoogleIcon sx={{ color: '#eb3b5a', marginBottom: '3px', left: '10px', position: 'absolute' }} /> Connect with google</Button>
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