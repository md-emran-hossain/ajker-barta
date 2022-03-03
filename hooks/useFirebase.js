import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, } from "firebase/auth";
import Swal from 'sweetalert2'
import { useRouter } from "next/router";

import initializeFirebase from '../components/Login/Firebase/Firebase.init';
// initialize firebase app
initializeFirebase();

export default function useFirebase() {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [jwtToken, setJwtToken] = useState('')

    const router = useRouter();
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                router.replace(location || '/');
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
    const registerUser = (email, Password, name) => {
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
                saveUser(email, name, "POST");
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

                router.push('/');
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
    const loginUser = (email, password, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user)
                router.push(location || '/');
                setAuthError('');
                handleResponse(user.user, location)
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
    const handleResponse = (user, location) => {
        router.push(location);
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
                router.push('/')
            }
        })
    };

    // firebase observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => {
                        setJwtToken(idToken)
                        // console.log(idToken);
                    })
                setUser(user);
                getAdmin(user.email)
            } else {
                setUser({});
            }
            setLoading(false)
        })
        return () => unsubscribe;
    }, [auth]);


    // admin set to database 
    const getAdmin = (email) => {
        fetch(`/api/users?email=${email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }
    // user info save to the database 
    const saveUser = (email, name, method) => {
        const user = { name, email };
        fetch('/api/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} `,
                })
            })
    };


    return {
        user, jwtToken, admin, authError, loading, signInWithGoogle, registerUser, loginUser, logOut, setLoading, setAuthError
    }
};

