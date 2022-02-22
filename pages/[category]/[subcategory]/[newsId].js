import { useRouter } from "next/router";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'react-share'
import { FaRegBookmark, FaPrint, } from "react-icons/fa";
import Footer from "../../../components/Shared/Footer/Footer";
import Header from "../../../components/Shared/Header/Header";
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { useForm } from "react-hook-form";
import NavigationBar from "../../../components/Shared/NavigationBar/NavigationBar";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
const Newsdetails = ({ newses }) => {
  const [success, setSuccess] = useState([])

  const { user } = useAuth()

  const router = useRouter();
  const newsId = router.query.newsId;
  const news = newses.find(news => news._id === newsId)
  const category = news.category;
  const remaining = newses.filter(item => item.category === category && item._id !== news._id)
  // const url = window?.location?.href
  const iconClass = "p-3 flex-initial bg-gray-200 rounded-full cursor-pointer";

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const dataup = {
      ...data,
      name: user.displayName,
      img: user.photoURL,
      date: new Date().toLocaleString(),
      email: user.email
    }


    const objShallowCopy = [...success, dataup];
    setSuccess(objShallowCopy);
    // Send a POST request

    if (!user.email) {
      Swal.fire({
        title: 'You are not signed in',
        text: "You want to comment? please Sign in first",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3ae374',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sign in '
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login')
        }
      })
    }
    else {
      fetch(`/api/news/${newsId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objShallowCopy)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            alert("comment added");
            reset();
          }
        })
        .catch(err => {

        })
    }
  };

console.log(news.comments);


  const Actions = () => {
    return (
      <div className="flex items-start gap-3">
        <span>
          <FacebookShareButton >

            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </span>
        <span >
          <TwitterShareButton >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </span>
        <span >
          <LinkedinShareButton>
            <LinkedinIcon round={true} size={40} />
          </LinkedinShareButton>
        </span>
        <span className={`${iconClass} bg-orange-500 text-white`}>
          <FaRegBookmark />
        </span>
        <span title='Print' onClick={() => window.print()} className={iconClass}>
          <FaPrint />
        </span>
      </div>
    );
  };
  // console.log(url)
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="grid md:mx-14 sm:mx-4 md:grid-cols-3 sm:grid-cols-1">
        <div className="col-span-2 mt-6">
          <h3 onClick={() => router.push(`/${category}`)} className="underline-offset-8 capitalize cursor-pointer underline mb-2 text-2xl text-blue-500 py-3">
            {news?.category}
          </h3>
          <h1 className="text-4xl mb-3 font-semibold">{news?.heading}</h1>
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="font-bold">{news?.reporter}</p>
              <p>Publish Date: {news?.publishedDate}</p>
            </div>
            <Actions />
          </div>
          <hr />
          <img src={news?.images?.img1} className=" py-3 w-full" alt={news?.title} />

          <p className="py-3 text-lg">{news?.description.slice(0, 5).join()}</p>
          {
            news?.images?.img2 && <img className="w-8/12 mx-auto" src={news?.images?.img2} alt='img2' />
          }
          <p className="py-3 text-lg">{news?.description.slice(5, 10).join()}</p>
          {
            news?.images?.img3 && <img src={news?.images?.img3} alt='img2' />
          }
          <p className="py-3 text-lg">{news?.description.slice(10, 15).join()}</p>
          <p className="py-3 text-lg">{news?.description.slice(15, 20).join()}</p>
          <p className="py-3 text-lg">{news?.description.slice(20, 25).join()}</p>

          <div className="border-y border-gray-300 flex items-center justify-between">
            <h2 className="text-xl font-semibold py-3">Comments</h2>
            <Actions />
          </div>
          <div className="flex justify-between items-center border-y border-gray-300">
            <h2 className="text-xl py-3">No Comments yet</h2>

            <div>
              <span>Sort by: </span>
              <select name="Sort by" id="Sort by">
                <option value="">Newest</option>
                <option value="">Oldest</option>
              </select>
            </div>
          </div>
          <div>
            {/* <h1>{success?.map(item=><h1 key={item.comment}>{item.comment}</h1>)}</h1> */}


            {

news.comments.map(item=>
  <div key={item.date} className="w-full flex p-3 pl-4 items-center  rounded-lg cursor-pointer">
          <div className="mr-4"><div className="h-9 w-19 rounded-sm flex items-center justify-center text-3xl" >
          <img class="inline object-cover w-12 h-12 mr-2 rounded-full" src={item.img} alt="Pro"/>
          </div>
        </div>
        <div>
           <div className="font-semibold text-sm">{item.name}</div>
           <div className="text-base text-gray-500">{item.comment}</div>
          <div className="text-xs text-gray-500">
            <span className="mr-2">{item.date}</span>
          </div>
        </div>
      </div>
  
  
  )


            }


          
      
            <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Write your comment here" type="text" {...register("comment")} className="border-2 rounded block w-full my-2 p-2" />
              <input className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded" type="submit" value="Comment" />
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <p className="mx-10 my-5 py-3 mb-3 underline text-xl">
            You may also read
          </p>
          {remaining.slice(0, 10).map((item) => {
            return (
              <div onClick={() => router.push(`/${item.category}/${item.subCategory}/${item?._id}`)} className="cursor-pointer" key={item._id}>
                <div className="mx-10 my-5 pb-4 border-b border-gray-300">
                  <h2 className="text-xl font-semibold">{item?.heading}</h2>
                  <div className="flex">
                    <p>{item?.description[0].slice(0, 70)}</p>
                    <img className="w-5/12" src={item?.images?.img1} alt={item.title} />
                  </div>
                  <p>{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer newses={newses} />
    </div>
  );
};

export default Newsdetails;
export const getStaticProps = async () => {
  const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
  return {
    props: {
      newses: res.data,
    },
  };
};
export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}