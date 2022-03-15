import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button, CircularProgress, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '800px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 15,
    borderRadius: '10px',
    p: 2,
};


const EditNews = ({ news, open, handleClose }) => {
    const { toggleLanguage } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [imgName, setImgName] = React.useState(false);
    const [uploading, setUploading] = React.useState(false)

    let images = []
    const handleImgUpload = async (e) => {
        const imageData = new FormData();
        console.log(e.target.files);
        imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
        await imageData.append("image", e.target.files[0]);
        setImgName(e.target.files[0].name);
        setUploading(true)
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((response) => {
                images.push(response.data.data.display_url);
                console.log(response.data.data.display_url)
                setUploading(false)
            })
            .catch((error) => {
                console.log(error);
            });
        setUploading(false)
        if (e.target.files.length == 2) {
            const imageData = new FormData();

            imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
            await imageData.append("image", e.target.files[1]);
            setImgName(e.target.files[1].name);
            setUploading(true)
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((response) => {

                    images.push(response.data.data.display_url);
                    console.log(response.data.data.display_url)

                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (e.target.files.length == 3) {
            const imageData = new FormData();

            imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
            await imageData.append("image", e.target.files[2]);
            setImgName(e.target.files[2].name);
            setUploading(true)
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((response) => {
                    images.push(response.data.data.display_url);
                    console.log(response.data.data.display_url)
                    setUploading(false)
                })
                .catch((error) => {
                    console.log(error);
                });
            setUploading(false)
        }
    };

    const handleNewsEdit = (data) => {
        const obj = {};
        let count = 1;
        for (const img of images) {
            let property = "img" + count;
            obj[property] = img;
            count++;
        }

        data.images = obj;
        console.log(data)

        let postUrl = null;
        if (toggleLanguage) {
            const url = `https://ajker-barta.vercel.app/api/bnnews?id=${news?._id}`
            postUrl = url;
        }
        else {
            const url = `https://ajker-barta.vercel.app/api/news?id=${news?._id}`
            postUrl = url;
        }
        axios.patch(postUrl, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'News edit Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    images = []
                    reset();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'News update Canceled!',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            })
    };

    const uploadFile = () => {
        document.getElementById('editClick').click();
    }

    return (
        <div>
            <Modal
                sx={{ overflow: 'scroll', paddingY: 5 }}
                className='bg-gray-200'
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} >
                        <h3 className='float-right cursor-pointer' onClick={handleClose}><CloseIcon fontSize='large' /></h3>
                        <h2 className='text-primary font-semibold text-center text-3xl py-4'>Edit This News </h2>
                        <Paper>
                            <form onSubmit={handleSubmit(handleNewsEdit)}>
                                <div className="mb-3">
                                    <p className='text-gray-500 m-2'>Heading</p>
                                    <input type="text" placeholder="Your Name" name='heading' defaultValue={news?.heading || ""} {...register("heading")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                                </div>

                                <div className="mb-3">
                                    <p className='text-gray-500 m-2'>Reporter</p>
                                    <input type="text" placeholder="Your Name" name='reporter' defaultValue={news?.reporter || ""} {...register("reporter")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                                </div>

                                <div className="flex items-center justify-around flex-wrap my-2">
                                    {uploading && <h1 className='text-center'><CircularProgress fontSize="large" /></h1>}
                                    <Button sx={{ paddingY: '3px', marginLeft: 2 }} type="submit" variant="outlined"
                                        color='secondary' onClick={uploadFile} className="">Upload image</Button>
                                    <input id='editClick' type="file" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
                                    <p className='text-gray-500 text-lg'>{imgName ? imgName : 'Select a image'}</p>
                                </div>


                                <div className="mb-5">
                                    <p className='text-gray-500 m-2'>Description</p>
                                    <textarea rows="7" placeholder="Your Message" name="description" defaultValue={news?.description || ""} {...register("description")} className="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <Button sx={{ width: '100%' }} type="submit" color='secondary' variant="contained">Save News</Button>
                                </div>
                            </form>
                        </Paper>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default EditNews;