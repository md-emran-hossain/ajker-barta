import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CircularProgress, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};


const EditNews = ({ news, open, handleClose }) => {
    const { toggleLanguage } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [imgName, setImgName] = React.useState("No Image Selected");
    const [uploading, setUploading] = React.useState(false)

    const handleImgUpload = async (e) => {
        const imageData = new FormData();
        imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
        await imageData.append("image", e.target.files[0]);
        setImgName(e.target.files[0].name);
        setUploading(true)
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((response) => {
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

                    console.log(response.data.data.display_url)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };



    const handleNewsEdit = (data) => {

        let postUrl = null;
        if (toggleLanguage) {
            const url = `/api/bnnews?id=${news?._id}`
            postUrl = url;
        }
        else {
            const url = `/api/news?id=${news?._id}`
            postUrl = url;
        }

        console.log(data.images)
        axios.patch(postUrl, data)
            .then(res => {
                console.log(res.data);
                if (data.modifiedCount) {
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
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} style={{ width: '800px', position: 'relative' }}>
                    <h3 className='cursor-pointer absolute right-2 top-2' onClick={handleClose}><CloseIcon fontSize='large' /></h3>
                    <h3 className='font-semibold text-3xl'>Edit News</h3>
                    <Paper >
                        <form onSubmit={handleSubmit(handleNewsEdit)}>
                            <div className="my-3">
                                <p className='text-gray-500 m-2'>Heading</p>
                                <input type="text" placeholder="Your Name" name='heading' defaultValue={news?.heading || ""} {...register("heading")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                            </div>

                            <div className="mb-3">
                                <p className='text-gray-500 m-2'>Reporter</p>
                                <input type="text" placeholder="Your Name" name='reporter' defaultValue={news?.reporter || ""} {...register("reporter")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                            </div>
                            {uploading ? <h1 className='text-center'><CircularProgress fontSize="large" /></h1> :
                                <div className="flex items-center justify-around flex-wrap my-2">
                                    <Button sx={{ paddingY: '3px', marginLeft: 2 }} variant="outlined"
                                        color='secondary' onClick={uploadFile} >Upload image</Button>
                                    <input id='editClick' type="file" accept="image/*" multiple onChange={handleImgUpload} style={{ display: 'none' }} />
                                    <p className='text-gray-500 text-lg'>{imgName}</p>
                                </div>}


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
            </Modal>
        </div>
    );
};

export default EditNews;