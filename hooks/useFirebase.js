import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, } from "firebase/auth";
import Swal from 'sweetalert2'
import Router from "next/router";

import initializeFirebase from '../components/Login/Firebase/Firebase.init';
// initialize firebase app
initializeFirebase();

export default function useFirebase() {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = (location, Router) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const destination = location?.state?.from || '/';
                Router.push(destination);
                const user = result.user;
                // save to database or update
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `Login success ${user.email} `,
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,

                })
                setAuthError(error.message)
            })
            .finally(() => setLoading(false));
    }

    // create new user with register
    const registerUser = (email, Password, name, Router) => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then(() => {
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `New user create success ${newUser.email} `,
                })

                // database save user
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setAuthError(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message} `,
                    })
                });

                Router.push('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,

                })
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // all ready create user login
    const loginUser = (email, password, location, Router) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user)
                // console.log(user.user)
                setAuthError('');
                handleResponse(user.user, location, Router)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `Login success ${user.user.email} `,
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} `,

                })
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };


    // handle logged in user
    const handleResponse = (user, location, Router) => {

        const destination = location?.state?.from || '/';
        Router.push(destination);
        setAuthError('');
        if (user.email === 'admin@gmail.com') {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-outline-primary ms-2 px-4 py-0',
                    cancelButton: 'btn btn-outline-danger me-2 px-4 py-0'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Warning',
                text: 'You have entered the admin panel for testing. Please do not abuse this facility!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Admin login success',
                        'Now you can check out all the features in the admin panel',
                        'success'
                    )
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    logOut()
                    swalWithBootstrapButtons.fire(
                        'Cancelled Request',
                        'Thank you. You can log in as a user if you want with another email.',
                        'error'
                    )
                }
            })

        };
    };


    // Log out user 
    const logOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00cec9',
            cancelButtonColor: '#d63031',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    setAuthError('');
                }).catch((error) => {
                    setAuthError(error.message);
                })
                    .finally(() => setLoading(false));
                Router.push('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    };

    // firebase observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        })
        return () => unsubscribe;
    }, [auth]);


    // admin set to database 
    // useEffect(() => {
    //     fetch(`/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin)
    //             console.log(data.admin)
    //         })
    //         .catch(error => {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: `${error} `,

    //             })
    //         })
    // }, [user.email]);

    /// user info save to the database 
    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     console.log(user);
    //     fetch('', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => {
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // };

    return {
        user, admin, authError, loading, signInWithGoogle, registerUser, loginUser, logOut, setLoading, setAuthError
    }
};

