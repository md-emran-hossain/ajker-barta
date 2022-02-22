import { useRouter } from "next/router";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from 'react-share'
import {
  FaRegBookmark,
  FaPrint,
} from "react-icons/fa";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import axios from 'axios'
import {formatDistanceToNow} from 'date-fns'
 import { useForm } from "react-hook-form";
import NavigationBar from "../../components/Shared/NavigationBar/NavigationBar";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
const Newsdetails = ({newses}) => {
  const [success,setSuccess]=useState([])

  const{user}=useAuth() 
  const router = useRouter();
  const newsId = router.query.newsId;
  const news = newses.find(news => news._id === newsId)
  const category = news.category;
  const remaining = newses.filter(item => item.category === category && item._id !== news._id)
  const url = window?.location?.href
  const iconClass = "p-3 flex-initial bg-gray-200 rounded-full cursor-pointer";
  console.log(news.comments)


  const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
     
      const dataup = {
        
        ...data,
        name: user.displayName,
        img:user.photoURL,
        date:new Date().toLocaleString(),
        email:user.email
        
      }
      const objShallowCopy = [...success,dataup];
      setSuccess(objShallowCopy);
    console.log(objShallowCopy);
    };
  const Actions = () => {





    return (
      <div className="flex items-start gap-3">
        <span>
          <FacebookShareButton url={url}>

          <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </span>
        <span >
          <TwitterShareButton url={url}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </span>
        <span >
         <LinkedinShareButton url={url}>
          <LinkedinIcon round={true} size={40} />
         </LinkedinShareButton>
        </span>
        <span className={`${iconClass} bg-orange-500 text-white`}>
          <FaRegBookmark />
        </span>
        <span onClick={() => window.print()} className={iconClass}>
          <FaPrint />
        </span>
      </div>
    );
  };

  return (

    
    <div>
      <Header />
      <NavigationBar />
      <div className="grid md:mx-14 sm:mx-4 md:grid-cols-3 sm:grid-cols-1">
        <div className="col-span-2 mt-20">
          <h3 onClick={() => router.push(`/${category}`)} className="cursor-pointer underline mb-2 text-2xl text-blue-500 py-3">
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

          <p className="py-3 text-lg">{news?.description.slice(0,5).join()}</p>
          {
            news?.images?.img2 && <img className="w-8/12 mx-auto" src={news?.images?.img2} alt='img2' />
          }
          <p className="py-3 text-lg">{news?.description.slice(5,10).join()}</p>
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
            <h1>{success?.map(item=><h1 key={item.comment}>{item.comment}</h1>)}</h1>


            <div className="w-full flex p-3 pl-4 items-center  rounded-lg cursor-pointer">
          <div className="mr-4"><div className="h-9 w-9 rounded-sm flex items-center justify-center text-3xl" >
            <svg t="1645067490174" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1640" width="200" height="200"><path d="M96 970.666667a416 32 0 1 0 832 0 416 32 0 1 0-832 0Z" fill="#45413C" p-id="1641"></path><path d="M896 864c0 46.933333-38.4 85.333333-85.333333 85.333333H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V576c0-211.2 172.8-384 384-384s384 172.8 384 384v288z" fill="#DAEDF7" p-id="1642"></path><path d="M512 192C300.8 192 128 364.8 128 576v106.666667c0-211.2 172.8-384 384-384s384 172.8 384 384v-106.666667c0-211.2-172.8-384-384-384z" fill="#FFFFFF" p-id="1643"></path><path d="M650.666667 938.666667c0 23.466667-19.2 42.666667-42.666667 42.666666h-192c-23.466667 0-42.666667-19.2-42.666667-42.666666v-170.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h192c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666667z" fill="#C0DCEB" p-id="1644"></path><path d="M373.333333 821.333333h277.333334v42.666667h-277.333334z" fill="#ADC4D9" p-id="1645"></path><path d="M970.666667 778.666667l-74.666667 42.666666V554.666667l74.666667 42.666666zM53.333333 778.666667l74.666667 42.666666V554.666667l-74.666667 42.666666z" fill="#ADC4D9" p-id="1646"></path><path d="M768 74.666667m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" fill="#FF6242" p-id="1647"></path><path d="M650.666667 821.333333h-277.333334V768c0-23.466667 19.2-42.666667 42.666667-42.666667h192c23.466667 0 42.666667 19.2 42.666667 42.666667v53.333333z" fill="#FF6242" p-id="1648"></path><path d="M693.333333 533.333333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#00DFEB" p-id="1649"></path><path d="M693.333333 533.333333m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" fill="#627B8C" p-id="1650"></path><path d="M330.666667 533.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#00DFEB" p-id="1651"></path><path d="M330.666667 533.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" fill="#627B8C" p-id="1652"></path></svg>
          </div>
        </div>
        <div>
           <div className="font-bold text-lg">Name: Tom</div>
          <div className="text-xs text-gray-500">
            <span className="mr-2">No: 007886</span>
            <span className="mr-2">gender: man</span>
            <span className="mr-2">hobby: skiing</span>
          </div>
        </div>
      </div>

      
            <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Write your comment here" type="text" {...register("comment")} className="border-2 rounded block w-full my-2 p-2" />
              <input className="bg-orange-500 text-white px-4 py-2 cursor-pointer rounded" type="submit" value="Post" />
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <p className="mx-10 my-5 py-3 mb-3 underline text-xl">
            You may also read
          </p>

          {remaining.slice(0,10).map((item) => {
            return (
              <div onClick={() => router.push(`/news/${item._id}`)} className="cursor-pointer" key={item._id}>
                <div className="mx-10 my-5 pb-4 border-b border-gray-300">
                  <h2 className="text-xl font-semibold">{item?.heading}</h2>
                  <div className="flex">
                    <p>{item?.description[0].slice(0, 70)}</p>
                    <img className="w-5/12" src={item?.images?.img1} alt={item.title} />
                  </div>
                  <p>{`${formatDistanceToNow(new Date(news.publishedDate))} ago` }</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newsdetails;
export const getServerSideProps = async () => {
      const res = await axios.get(`https://ajker-barta.vercel.app/api/news/`);
      return {
        props: {
          newses: res.data,
        },
      };
    };