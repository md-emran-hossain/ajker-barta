import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Push from "push.js";
import { Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const NewsPublish = () => {
  const { toggleLanguage } = useAuth();
  const [category, setCategory] = useState([]);
  let images = []
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImgUpload = async (e) => {
    const imageData = new FormData();
    console.log(e.target.files);
    imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
    await imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        images.push(response.data.data.display_url);
        console.log(images)
      })
      .catch((error) => {
        console.log(error);
      });
    if (e.target.files.length == 2) {
      const imageData = new FormData();

      imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
      await imageData.append("image", e.target.files[1]);

      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((response) => {

          images.push(response.data.data.display_url);
          console.log(images)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (e.target.files.length == 3) {
      const imageData = new FormData();

      imageData.set("key", "0c35775465096fb810e5b6d78f1cd823");
      await imageData.append("image", e.target.files[2]);

      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((response) => {

          images.push(response.data.data.display_url);
          console.log(images)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const onSubmit = async (data) => {
    const description = data.description?.split("\n");
    const obj = {};
    let count = 1;
    for (const img of images) {
      let property = "img" + count;
      obj[property] = img;
      count++;
    }
    data.description = description;
    data.images = obj;
    data.category = category;
    data.publishedDate = new Date().toLocaleString();

    const res = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.insertedId) {
      Push.create("Hello World!");
      alert("News added");
      images = []
      reset();
    }
    socket.emit('sendNotification', data)
  };

  return (
    <div className="container">
      <Typography sx={{ mx: 1, my: 3, fontSize: 'bold' }} variant="h4" > {toggleLanguage ? "একটি খবর যোগ করুন" : "Add A NEWS"} </Typography>
      <form
        className="flex flex-col space-y-4 md:w-3/4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="px-2 py-3 outline-0 border rounded-md border-red-100"
          type="text"
          {...register("heading", { required: true })}
          placeholder="Give a attractive heading"
        />
        {/* errors will return when field validation fails  */}
        {errors.heading && (
          <span className="bg-red-50 text-red-500 rounded-md">
            This field is required
          </span>
        )}

        <textarea
          className="px-2 py-3 outline-0 border rounded-md border-red-100"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        {errors.description && (
          <span className="bg-red-50 text-red-500 rounded-md">
            This field is required
          </span>
        )}
        {/* <textarea
                    className="px-2 py-3 outline-0 border rounded-md border-red-100"
                    {...register("images", { required: true })}
                    placeholder="Please provide relevant image"
                />
                {/* errors will return when field validation fails  */}
        {/* {
                    errors.images && <span className="bg-red-50 text-red-500 rounded-md">This field is required</span>
                } */}
        {/*    */}
        <input
          onChange={handleImgUpload}
          name="img"
          accept="image/*"
          type="file"
          className="px-2 py-3 outline-0 border rounded-md border-red-100"
          multiple
        />
        <input
          className="px-2 py-3 outline-0 border rounded-md border-red-100"
          type="text"
          {...register("reporter", { required: true })}
          placeholder="Reporter"
        />
        {/* errors will return when field validation fails  */}
        {errors.reporter && (
          <span className="bg-red-50 text-red-500 rounded-md">
            This field is required
          </span>
        )}
        <select
          className="px-2 py-3 outline-0 border rounded-md border-red-100"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="not defined">Please select a category</option>
          <option value="coronavirus">CORONAVIRUS</option>
          <option value="opinion">Opinion</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="international">International</option>
          <option value="entertainment">Entertainment</option>
          <option value="sciencetechnology">Science & Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>

        {category === "coronavirus" || (
          <select
            className="px-2 py-3 outline-0 border rounded-md border-red-100"
            {...register("subCategory", { required: true })}
          >
            <option value="not defined">Please select a sub category</option>
            {category === "international" && (
              <>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
                <option value="middle east">Middle East</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="africa">Africa</option>
                <option value="australia">Australia</option>
                <option value="south asia">South Asia</option>
              </>
            )}
            {category === "sports" && (
              <>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="local sports">Local sports</option>
              </>
            )}
            {category === "bangladesh" && (
              <>
                <option value="politics">Politics</option>
                <option value="accident">Accident</option>
                <option value="good day">Good Day</option>
                <option value="crime">Crime</option>
                <option value="government">Government</option>
                <option value="city">City</option>
                <option value="local news">Local News</option>
                <option value="parliament">Parliament</option>
                <option value="bangladesh in world media">
                  Bangladesh in World Media
                </option>
                <option value="round table">Round Table</option>
              </>
            )}
            {category === "sciencetechnology" && (
              <>
                <option value="gadgets">Gadgets</option>
                <option value="social media">Social Media</option>
                <option value="IT">IT</option>
                <option value="Science">Science</option>
              </>
            )}
            {category === "business" && (
              <>
                <option value="local">Local</option>
                <option value="global">Global</option>
              </>
            )}
            {category === "entertainment" && (
              <>
                <option value="dhallywood">Dhallywood</option>
                <option value="bollywood">Bollywood</option>
                <option value="hollywood">Hollywood</option>
                <option value="music">Music</option>
                <option value="movies">Movies</option>
                <option value="television">Television</option>
                <option value="OTT">OTT</option>
              </>
            )}
            {category === "opinion" && (
              <>
                <option value="editorial">Editorial</option>
                <option value="interview">Interview</option>
                <option value="analysis">Analysis</option>
                <option value="world media">World Media</option>
                <option value="Op-Ed">Op-Ed</option>
              </>
            )}
          </select>
        )}
        {category === "opinion" && (
          <input
            className="ring-2 ring-red-600 rounded-sm p-2"
            type="text"
            {...register("subHeading")}
            placeholder="Sub heading"
          />
        )}

        <input
          className="w-36 bg-red-500 py-2.5 text-white font-medium uppercase text-lg rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer"
          type="submit"
          value="Add News"
        />
      </form>
    </div>
  );
};

export default NewsPublish;
