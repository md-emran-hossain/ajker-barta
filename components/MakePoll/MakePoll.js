import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Divider, TextField } from "@mui/material";

const MakePoll = () => {
    const [uploading, setUploading] = useState(false)
    const [imgName, setImgName] = React.useState(false);
    const [pollImg, setPollImg] = React.useState("");
    const [pollQuestion, setPollQuestion] = React.useState("")

    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const handleImgUpload = async (e) => {
        const imageData = new FormData();
        setImgName(e.target.files[0]?.name);
        imageData.set('key', '0c35775465096fb810e5b6d78f1cd823');
        await imageData.append('image', e.target.files[0])
        setUploading(true)
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                setPollImg(response.data.data.display_url);
                console.log(response.data.data.display_url);
                setUploading(false)
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            });
    };

    const onSubmit = (data) => {
        const poll = {
            img: pollImg,
            question: pollQuestion || data.question,
            publishedDate: new Date().toLocaleString(),
            vote: { yes: 0, no: 0, noComment: 0 }
        }

        fetch("/api/poll", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(poll),
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `Vote success for this news`,
                });
                reset();
            })
    };
    const uploadFile = () => {
        document.getElementById('pollClick').click();
    }

    return (
        <div className="container">
            <h2 className="text-4xl uppercase w-fit border-b-2 border-red-500 mx-auto mb-6">
                Make a Poll
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 md:w-3/4 mx-auto"
            >
                <Card>
                    <CardHeader title="Create a new poll" />
                    <Divider />
                    <CardContent>
                        {uploading ? <h1 className='text-center'><CircularProgress fontSize="large" /></h1> :
                            <div className="flex items-center justify-around flex-wrap my-2">
                                <Button sx={{ paddingY: '3px', marginLeft: 2 }} variant="outlined"
                                    color='secondary' onClick={uploadFile} className="">Upload image</Button>
                                <input id='pollClick' type="file" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
                                <p className='text-gray-500 text-lg'>{imgName ? imgName : 'Select a image'}</p>
                            </div>}
                        <TextField onChange={(e) => setPollQuestion(e.target.value)} {...register("question", { required: true })} fullWidth label="Make Question" margin="normal" type="text" variant="outlined" />
                        {errors.question && (
                            <span className="bg-red-50 text-red-700 rounded-md">
                                This field is required
                            </span>
                        )}
                    </CardContent>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                        <Button color="secondary" variant="contained" type="submit" > Make Poll</Button>
                    </Box>
                </Card>
            </form>
        </div>
    );
};

export default MakePoll;
