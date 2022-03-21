
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, Avatar, Typography, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
export const AccountProfileDetails = () => {
    const { user } = useAuth()
    const [userData, setUserData] = useState({})
    const [uploading, setUploading] = useState(false)

    // upload image 
    const [profileImg, setProfileImg] = useState(null);
    const [imgName, setImgName] = useState(false);
    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        setImgName(e.target.files[0].name);
        imageData.set('key', '0c35775465096fb810e5b6d78f1cd823');
        await imageData.append('image', e.target.files[0])
        setUploading(true)
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);
                setProfileImg(response.data.data.display_url);
                setUploading(false)
            })
            .catch(error => {
                console.log(error)
            });
        setUploading(false)
    };

    const handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name
        const newObj = { ...userData }
        newObj.photoURL = profileImg
        newObj[property] = value
        delete newObj._id
        setUserData(newObj)

    };

    useEffect(() => {
        fetch(`https://ajker-barta.vercel.app/api/users/note?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: `${error}`,
                })
            })
    }, [user.email])

    const updateUser = (e) => {
        e.preventDefault()
        fetch('https://ajker-barta.vercel.app/api/users', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `Profile Updated`,
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: `${error}`,
                })
            })
    };

    useEffect(() => {
        const ac = new AbortController();
        Promise.all([
            fetch(`https://ajker-barta.vercel.app/api/users/note?email=${user.email}`, { signal: ac.signal })
        ]).then(data => setUserData(data))
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: `${error}`,
                })
            })
        return () => ac.abort();
    }, [user]);



    const uploadFile = () => {
        document.getElementById('profileImg').click();
    }
    return (
        <Grid container spacing={3} >
            <Grid item lg={4} md={6} xs={12}>
                <Card>
                    <CardContent>
                        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                            <Avatar src={userData?.photoURL || user.photoURL} sx={{ height: 100, mb: 2, width: 100 }} />
                            <Typography color="textPrimary" gutterBottom variant="h5">{userData.name}</Typography>
                            <Typography color="textSecondary" variant="body2" >
                                {`${userData?.city || ''} ${userData?.country || ''}`}
                            </Typography>
                            <Typography color="textSecondary" variant="body2" >
                                {userData?.timezone}
                            </Typography>
                        </Box>
                    </CardContent>
                    <Divider />
                    <CardContent>
                        {uploading ? <h1 className='text-center'><CircularProgress fontSize="large" /></h1> :
                            <div className="flex items-center justify-around flex-wrap">
                                <Button type="submit" color="info" variant="contained" onClick={uploadFile} className="">Upload image</Button>
                                <input id='profileImg' type="file" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
                                <p className='text-gray-600 text-md'>{imgName && imgName}</p>
                            </div>}
                    </CardContent>
                </Card>

            </Grid>


            <Grid item lg={8} md={6} xs={12} >
                <form autoComplete="off" noValidate onSubmit={updateUser} >
                    <Card>
                        <CardHeader subheader="The information can be edited" title="Profile" />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={3}  >
                                <Grid item md={6} xs={12}>
                                    <TextField fullWidth helperText="Please specify the full name" label="Full Name" name="name" onChange={handleChange} required value={userData.name || ''} variant="standard" color='info' />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <TextField fullWidth label="Email Address" name="email" value={userData.email || ''} variant="standard" disabled color='info' />
                                </Grid>

                                <Grid item md={6} xs={12} >
                                    <TextField fullWidth label="Country" name="country" onChange={handleChange} value={userData?.country || ''} variant="standard" color='info' />
                                </Grid>

                                <Grid item md={6} xs={12} >
                                    <TextField fullWidth label="State Name" name="state" onChange={handleChange} value={userData?.state || ''} variant="standard" color='info'>
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }} >
                            <Button color="info" fullWidth variant="contained" type='submit'> Save details</Button>
                        </Box>
                    </Card>
                </form>
            </Grid>
        </Grid>
    );
};
