import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, InputAdornment, SvgIcon, TextField, Typography } from '@mui/material';
import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Swal from 'sweetalert2';
const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const [adminSuccess, setAdminSuccess] = React.useState(false);
    console.log(email, adminSuccess)

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-600 hover:bg-green-800 text-white font-bold py-1 px-5 border-b-2 border-green-700 hover:border-green-500 rounded ml-2',
                cancelButton: 'bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-5 border-b-2 border-red-700 hover:border-red-500 rounded mr-2'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be Create an a admin!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Create !',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('/users/admin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            console.log(data);
                            setEmail('');
                            setAdminSuccess(true);
                            swalWithBootstrapButtons.fire(
                                'Created',
                                'New admin created successfully.',
                                'success'
                            )
                        }
                        else if (!data.modifiedCount) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Admin create field',
                                text: 'Request field create make admin',
                            })
                        }
                    })
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Admin created request canceled :)',
                    'error'
                )
            }
        })
    }

    return (
        <div className='w-92 mx-auto'>
            <Box sx={{ maxWidth: "90%", marginX: 'auto' }}>
                <Card sx={{ borderRadius: '20px' }}>
                    <form onSubmit={handleMakeAdmin}>
                        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingY: 2 }} >
                            <Typography sx={{ m: 1, fontWeight: 'bold' }} variant="h4" >  Make Admin </Typography>
                            <Box sx={{ m: 1 }}>
                                <Button type='submit' color="success" variant="contained" > Create Admin </Button>
                            </Box>
                        </Box>
                        <CardActionArea sx={{}}>
                            <CardMedia className='object-cover'
                                component="img"
                                image={"https://i.ibb.co/KKfz3rj/admin.png"}
                                alt="Admin"
                                sx={{ borderRadius: '20px', width: '100%', height: 'auto', maxHeight: '550px' }}
                            />

                        </CardActionArea>
                        <CardContent>
                            <Box >
                                <TextField fullWidth onChange={e => setEmail(e.target.value)} required type={"email"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SvgIcon color="success" fontSize="medium"  ><PersonAddIcon /> </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                    label="Create Admin"
                                    color='success'
                                    placeholder="Create Admin"
                                    variant="outlined" />
                            </Box>
                        </CardContent>
                    </form>
                </Card>



                {/* <Card className='shadow w-75 mx-auto' >
                    <CardActionArea>
                        <CardMedia className='img-fluid'
                            component="img"
                            image={"https://i.ibb.co/KKfz3rj/admin.png"}
                            alt="Admin"
                            sx={{ borderRadius: '20px', maxHeight: '400px' }}
                        />
                        <CardContent>
                            <form onSubmit={handleMakeAdmin} className="mt-2">
                                <TextField id="admin-input"
                                    className="w-100" type="email" required onChange={e => setEmail(e.target.value)} label="ENTER A EMAIL AND CREATE A ADMIN" variant="standard" />
                                <Button type="submit" variant="contained" className=" w-100  rounded-pill mt-4 ">
                                    CREATE NEW ADMIN
                                </Button>
                            </form>
                        </CardContent>
                    </CardActionArea>
                </Card> */}


            </Box>
        </div >
    );
};

export default MakeAdmin;