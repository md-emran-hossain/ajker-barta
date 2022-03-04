import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { formatDistanceToNow } from "date-fns";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

const WishList = () => {
  const { user } = useAuth()
  const [wishList, setWishList] = useState([])
  const [matchedData, setMatchedData] = useState([])
  const router = useRouter()
  useEffect(() => {
    fetch(`/api/users/note?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.wishlist) {
          setWishList(data.wishlist)
        } else {
          setWishList([])
        }
      })
  }, [user.email])
  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        let newArr = []
        for (const wish of wishList) {
          console.log(wish)
          const matched = data.find(news => news._id === wish)
          newArr.push(matched)
        }
        setMatchedData(newArr)
      })
  }, [wishList])

  const handleDeleteWish = (id) => {
    fetch(`/api/users/deletewish?email=${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount === 1) {
          const remaining = matchedData.filter(singleId => singleId !== id)
          setWishList(remaining)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Removed from your wish list`,
          })
        }
      })
  }

  if (!matchedData.length) {
    return <div className='text-2xl font-semibold text-red-500'>You have no wish list yet !!!</div>
  }
  return (
    <div className='container'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {
          matchedData.map(news => <div key={news._id} className=' p-2 shadow-sm imageEffect hover:shadow-md'>
            <div className='overflow-hidden'>
              <img className='w-full h-52 object-cover' src={news?.images?.img1} alt="" />
            </div>
            <h1 onClick={() => router.push(`/${news.category}/${news.subCategory}/${news?._id}`)} className='text-lg leading-6 my-1 font-semibold hover:text-red-600 transition-colors duration-300 cursor-pointer' >{news?.heading}</h1>
            <p className='text-sm'>{news?.description[0].slice(0, 100)}...</p>
            <div className='flex items-center justify-between'>
              <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit text-blue-500">{`${formatDistanceToNow(new Date(news.publishedDate))} ago`}</p>
              <button onClick={() => handleDeleteWish(news._id)} className='py-1 px-2 text-sm bg-gray-300 rounded-md'>Remove</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default WishList;