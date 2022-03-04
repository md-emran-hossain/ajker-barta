import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

export const AccountProfileDetails = () => {
    const { user } = useAuth()
    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name
        const newObj = { ...userData }
        newObj[property] = value
        delete newObj._id
        setUserData(newObj)
    };
    useEffect(() => {
        fetch(`/api/users/note?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user.email])

    const updateUser = (e) => {
        e.preventDefault()
        fetch('/api/users', {
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
    }

    return (
        <form
            autoComplete="off"
            noValidate
            onSubmit={updateUser}
        >
            <Card>
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                name="name"
                                onChange={handleChange}
                                required
                                value={userData.name || ''}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                value={userData?.lastName || ''}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={'' || userData.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={userData?.phone || ''}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                onChange={handleChange}
                                value={userData?.country || ''}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="State Name"
                                name="state"
                                onChange={handleChange}
                                value={userData?.state || ''}
                                variant="outlined"
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        type='submit'
                    >
                        Save details
                    </Button>
                </Box>
            </Card>
        </form>
    );
};
