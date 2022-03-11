import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";

const MakePoll = () => {
    const [uploading, setUploading] = useState(false)

    let images = []
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const handleImgUpload = async (e) => {
        const imageData = new FormData();
        imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
        await imageData.append("image", e.target.files[0]);
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
    const onSubmit = async (data) => {
        const obj = {};
        let count = 1;
        for (const img of images) {
            let property = "img" + count;
            obj[property] = img;
            count++;
        }
        data.images = obj;
        data.publishedDate = new Date().toLocaleString();
        data.vote = { yes: 0, no: 0, noComment: 0 };

        if (pollImg) {
            const res = await fetch("/api/poll", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (result.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `Vote success for this news`,
                });
                images = []
                reset();
            }
        }

    };

    return (
        <div className="container">
            <h2 className="text-4xl uppercase w-fit border-b-2 border-red-500 mx-auto mb-6">
                Make a Poll
            </h2>
            <form
                className="flex flex-col space-y-4 md:w-3/4 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                {uploading && <h1 className="text-center text-3xl"> <CircularProgress /> </h1>}

                <input
                    onChange={handleImgUpload}
                    name="img"
                    accept="image/*"
                    type="file"
                    className="px-2 py-3 outline-0 border rounded-md border-red-100"
                    multiple
                />
                <textarea
                    className="px-2 py-3 outline-0 border rounded-md border-red-100"
                    {...register("question", { required: true })}
                    placeholder="Question"
                />
                {errors.question && (
                    <span className="bg-red-50 text-red-500 rounded-md">
                        This field is required
                    </span>
                )}

                <input
                    className="w-36 bg-red-500 py-2.5 text-white font-medium uppercase text-lg rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                    type="submit"
                    value="Make Poll"
                />
            </form>
        </div>
    );
};

export default MakePoll;
