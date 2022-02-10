import React, { useState,useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Corona from './Corona';

const Coronavirus = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        
        fetch('/ass/fakeapi.JSON')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
           
          })
      }, [])
console.log(data);
    return (
        <div className="container xl mx-auto">
          <div className="flex items-center justify-start ">
      <h1 className=' text-xl cursor-pointer font-medium text-blue-900'>Coronavirus Worldwide</h1><IoIosArrowForward className='text-red-600 mt-1' />
      </div>
  <div className="py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
  
  {


data.map(item=><Corona 
key={item.id}
item={item}
></Corona>)


  }

</div>

</div>
 

    );
};

export default Coronavirus;