import React, { useState, useEffect } from 'react';
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
      <div className="mt-5 uppercase font-bold text-xl mb-2">Coronavirus <span className='text-red-500'>Worldwide</span> </div>
      <div className="py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">

        {


          data.map(item => <Corona
            key={item.id}
            item={item}
          ></Corona>)


        }

      </div>

    </div>


  );
};

export default Coronavirus;