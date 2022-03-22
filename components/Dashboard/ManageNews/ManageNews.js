import React, { useState } from 'react';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNews from '../../EditNews/EditNews';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const tableStyle = {
    borderRight: '1px solid gray'
}
const ManageNews = ({ bengaliNews, englishNews }) => {
    const { toggleLanguage } = useAuth();
    let manageAllNews = null;
    if (toggleLanguage) {
        const b = bengaliNews;
        manageAllNews = b;
    }
    else {
        const e = englishNews;
        manageAllNews = e;
    }
    // modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // handle delete 
    const handleDeleteNews = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'ml-2 bg-green-500 text-white rounded-full px-8 py-1',
                cancelButton: 'bg-red-500 text-white rounded-full px-8 py-1'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                let deleteURL = {};
                if (toggleLanguage) {
                    const url = `api/bnnews?id=${id}`;
                    deleteURL = url;
                } else {
                    const url = `/api/news?id=${id}`;
                    deleteURL = url;
                }

                fetch(deleteURL, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This News has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'News Delete Cancel',
                    'error'
                )
            }
        })
    };

    return (
        <div>

            <div className="container">
                <Typography sx={{ mx: 1, my: 3, fontSize: 'bold' }} variant="h4" > {toggleLanguage ? "সংবাদ পরিচালনা করুন" : "Manage Newses"} </Typography>
                <Paper elevation={5} sx={{ width: '100%', borderRadius: '20px' }}>
                    <TableContainer className='' sx={{ borderRadius: '10px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="center">Image</TableCell>
                                    <TableCell style={tableStyle} align="center">Heading</TableCell>
                                    <TableCell style={tableStyle} align="center">Category</TableCell>
                                    <TableCell style={tableStyle} align="center">Sub category</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageAllNews?.map((news) => (
                                    <TableRow
                                        key={news._id}>
                                        <TableCell style={tableStyle} align="left"><img src={news?.images?.img1} alt="news img" style={{ height: '50px' }} /></TableCell>
                                        <TableCell style={tableStyle} align="left">{news?.heading} <br /></TableCell>
                                        <TableCell style={tableStyle} align="left">{news?.category}</TableCell>
                                        <TableCell style={tableStyle} align="center">{news?.subCategory}</TableCell>
                                        <TableCell align="center" sx={{ minWidth: '120px' }}>
                                            <div className="flex items-center justify-around flex-wrap">
                                                <h5 onClick={handleOpen} className='xs:mb-2 cursor-pointer font-bold px-2' > <EditIcon sx={{ color: 'green' }} /></h5>

                                                <h5 onClick={() => handleDeleteNews(news?._id)} className=' cursor-pointer font-bold px-2' ><DeleteForeverIcon sx={{ color: 'red' }} /></h5>
                                            </div>
                                        </TableCell>
                                        <EditNews
                                            news={news}
                                            open={open}
                                            handleClose={handleClose} />
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>

        </div>
    );
};

export default ManageNews;