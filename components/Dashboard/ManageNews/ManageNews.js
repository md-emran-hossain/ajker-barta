import * as React from 'react';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import { Paper, TableCell, TableHead, TableContainer, TableRow, Table, TableBody } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';

const tableStyle = {
    borderRight: '1px solid gray'
}
const ManageNews = ({ bengaliNews, englishNews }) => {
    const { toggleLanguage } = useAuth();
    const { register, handleSubmit, reset } = useForm();
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
    const [singleNews, setSingleNews] = React.useState({})

    //edit
    const handleOpen = (id) => {
        setOpen(true)
        let url = ''
        if (toggleLanguage) {
            url = `/api/bnnews/single?id=${id}`
        } else {
            url = `/api/news/single?id=${id}`
        }
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleNews(data))
    }
    const handleNewsEdit = (data) => {
        data.description = data.description || singleNews.description
        data.heading = data.heading || singleNews.heading
        let imageStr = data.images || Object.values(singleNews?.images).toString()
        data.reporter = data.reporter || singleNews.reporter
        let imageArr = imageStr.split(',')
        let images = {};
        let count = 1;
        for (let img of imageArr) {
            let property = "img" + count;
            images[property] = img;
            count++;
        }
        data.images = images
        let url = '';
        if (toggleLanguage) {
            url = `/api/bnnews?id=${singleNews._id}`;
        } else {
            url = `/api/news?id=${singleNews._id}`;
        }
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    setOpen(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'News updated Successfully',
                    })
                }
            })
    }

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
                                                <h5 onClick={() => handleOpen(news?._id)} className='xs:mb-2 cursor-pointer font-bold text-gray-800 hover:bg-gray-200 rounded-lg px-2' > <EditIcon /></h5>

                                                <h5 onClick={() => handleDeleteNews(news?._id)} className=' cursor-pointer font-bold text-gray-800 hover:bg-gray-200 rounded-lg px-2' ><DeleteForeverIcon /></h5>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className={!open ? 'hidden fixed w-2/3' : 'block fixed bg-white w-2/3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 rounded-md max-h-screen overflow-scroll'} style={{ boxShadow: "0px 0px 20px 1px rgba(0,0,0,0.2)", zIndex: 99999 }}>
                            <h1 className='text-2xl text-center'>Edit News</h1>
                            <div onClick={() => setOpen(false)} className=' absolute right-2 top-2 bg-red-500 text-white rounded-full cursor-pointer'>
                                <CloseIcon />
                            </div>
                            <form onSubmit={handleSubmit(handleNewsEdit)}>
                                <div>
                                    <label className='font-semibold'>Heading</label>
                                    <input className='w-full py-2 px-3 border border-red-200 outline-0 rounded-md my-2' type="text" defaultValue={singleNews?.heading || ''} {...register("heading")} autoFocus name="heading" />
                                </div>
                                <div>
                                    <label className='font-semibold'>Reporter</label>
                                    <input className='w-full py-2 px-3 border border-red-200 outline-0 rounded-md my-2' type="text" defaultValue={singleNews?.reporter || ''} {...register("reporter")} autoFocus name="reporter" />
                                </div>
                                {
                                    <div>
                                        <label className='font-semibold'>Images</label>
                                        <textarea autoFocus rows='3' defaultValue={singleNews?.images && Object.values(singleNews.images).toString()} className='w-full py-2 px-3 border border-red-200 outline-0 rounded-md my-2' type="text" {...register("images")} name="images" />
                                    </div>
                                }
                                <div>
                                    <label className='font-semibold'>Description</label>
                                    <textarea autoFocus rows='5' className='w-full py-2 px-3 border border-red-200 outline-0 rounded-md my-2' type="text" defaultValue={singleNews?.description || ''} {...register("description")} name="description" />
                                </div>
                                <input className='py-2 px-4 bg-red-500 text-white rounded-md cursor-pointer' type="submit" value="Update" />
                            </form>
                        </div>
                    </TableContainer>
                </Paper>
            </div>

        </div>
    );
};

export default ManageNews;