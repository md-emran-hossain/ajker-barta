import * as React from 'react';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import { Paper, TableCell, TableHead, TableContainer, TableRow, Table, TableBody } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNews from '../../EditNews/EditNews';

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
    const [open, setOpen] = React.useState(false);
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
                    const url = `api/bnnews/${id}`;
                    deleteURL = url;
                } else {
                    const url = `/api/news/${id}`;
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
                    'this news not deleted',
                    'error'
                )
            }
        })
    };

    return (
        <div>
            <h1 className="font-semibold text-4xl text-center text-gray-600 my-4">MANAGE NEWS</h1>
            <div className="container">
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
                                        key={news._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell style={tableStyle} align="left"><img src={news?.images?.img1} alt="news img" style={{ height: '50px' }} /></TableCell>
                                        <TableCell style={tableStyle} align="left">{news?.heading} <br /></TableCell>
                                        <TableCell style={tableStyle} align="left">{news?.category}</TableCell>
                                        <TableCell style={tableStyle} align="center">{news?.subCategory}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex items-center justify-around flex-wrap">
                                                <h5 onClick={handleOpen} className='xs:mb-2 cursor-pointer font-bold text-gray-800 hover:bg-gray-200 rounded-lg px-2' > <EditIcon /></h5>

                                                <h5 onClick={() => handleDeleteNews(news?._id)} className=' cursor-pointer font-bold text-gray-800 hover:bg-gray-200 rounded-lg px-2' ><DeleteForeverIcon /></h5>
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