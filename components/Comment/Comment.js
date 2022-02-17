import React from 'react';

const Comment = () => {
    return (


        <>

<div className="max-w-lg">
  <form action="" className="w-full p-4">
    <div className="mb-2">
      <label className="text-lg text-gray-600">Name</label>
      <input className="appearance-none block w-full text-gray-700  py-3 px-4 mb-3 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div className="mb-2">
      <label className="text-lg text-gray-600">Add a comment</label>
      <textarea className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="comment" placeholder=""></textarea>
    </div>
    <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
  </form>


  <div className=" w-full lg:max-w-full lg:flex">
      
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="https://s.abcnews.com/images/US/hanna-swimmer-mo_hpMain_20200725-163152_2_4x3t_384.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">John Smith</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>


</div>



        
        </>
       
    );
};

export default Comment;