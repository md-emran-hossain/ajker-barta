import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 15,
    borderRadius: '20px',
    p: 2,
};


const EditNews = ({ news, open, handleClose }) => {
    const { heading, subCategory, category, description, _id, reporter, publishedDate } = news;
    // console.log(news)
    const { register, handleSubmit } = useForm();

    const [newsImg, setNewsImg] = React.useState(null);
    const [imgName, setImgName] = React.useState(false);

    // upload image
    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        setImgName(e.target.files[0].name);
        imageData.set('key', '0c35775465096fb810e5b6d78f1cd823');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);
                setNewsImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleNewsEdit = (data) => {
        // e.preventDefault();

        const newsData = {
            img: newsImg,
            heading: data.heading,
            subCategory: data.subCategory,
            category: data.category,
            description: data.description,
            reporter: data.reporter,
            publishedDate: data.publishedDate,

        };
        console.log(newsData)


        axios.patch(`/api/news?id=${_id}`, newsData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'News edit Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
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
        document.getElementById('newsImg').click();
    }

    return (
        <div>
            <Modal
                sx={{ overflow: 'scroll' }}
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
                    <Box sx={style}>
                        <div className="bg-white" style={{ width: '550px' }}>
                            <form onSubmit={handleSubmit(handleNewsEdit)}>
                                <div className="mb-3">
                                    <p className='text-gray-500 ml-2'>Title</p>
                                    <input type="text" placeholder="Your Name" name='heading' defaultValue={heading || ""} {...register("heading")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                                </div>

                                <div className="mb-3">
                                    <p className='text-gray-500 ml-2'>Reporter</p>
                                    <input type="text" placeholder="Your Name" name='reporter' defaultValue={reporter || ""} {...register("reporter")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                                </div>


                                <div className="grid grid-cols-2 gap-2">
                                    <div className="mb-3">
                                        <p className='text-gray-500 ml-2'>Category</p>
                                        <select defaultValue={category || ""} name="category" {...register("category")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary">
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="international">International</option>
                                            <option value="sports">sports</option>
                                            <option value="sciencetechnology">Science & Technology</option>
                                            <option value="business">Business</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="lifestyle">Lifestyle</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <p className='text-gray-500 ml-2'>Category</p>
                                        <select defaultValue={category || ""} name="category" {...register("category")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary">
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="international">International</option>
                                            <option value="sports">sports</option>
                                            <option value="sciencetechnology">Science & Technology</option>
                                            <option value="business">Business</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="lifestyle">Lifestyle</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <p className='text-gray-500 ml-2'>Sub Category</p>
                                    <input type="text" placeholder="Your Name" name="subCategory" defaultValue={subCategory || ""} {...register("subCategory")} className=" w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
                                </div>

                                <div className="flex items-center justify-around flex-wrap my-2">
                                    <Button sx={{ paddingY: '3px', marginLeft: 2 }} type="submit" variant="outlined"
                                        color='secondary' onClick={uploadFile} className="">Upload image</Button>
                                    <input id='newsImg' type="file" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
                                    <p className='text-gray-500 text-lg'>{imgName ? imgName : 'Select a image'}</p>
                                </div>


                                <div className="mb-3">
                                    <p className='text-gray-500 ml-2'>Description</p>
                                    <textarea rows="5" placeholder="Your Message" name="description" defaultValue={description || ""} {...register("description")} className="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <Button sx={{ width: '100%' }} type="submit" color='secondary' variant="contained">Save News</Button>
                                </div>
                            </form>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default EditNews;