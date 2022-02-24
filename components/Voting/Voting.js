import { useState } from "react";

function Voting() {
	 const initialState = {
	 	yes: 7,
	 	no: 4,
	 	comment: 4,
	 };

    
	// const [python, setPython] = useState(initialState.yes);
	// const [javascript, setJavascript] = useState(initialState.no);
	// const [comment, setComment] = useState(initialState.comment);
	const [formData, updateFormData] = useState(initialState);
    // console.log(python);
	const handleVote = (e) => {
		const { name, value } = e.target;
		 if (name === "yes") {
			updateFormData(initialState.yes + 1);
		 	updateFormData(initialState.no);
		 }
		 if (name === "no") {
			updateFormData(initialState.no + 1);
		 	updateFormData(initialState.yes);
		 }
		 if (name === "comment") {
			updateFormData(initialState.comment + 1);
			updateFormData(initialState.yes);
             updateFormData(initialState.no);
		 }
		

		// updateFormData({
		// 	//  ...formData,
	  
		// 	// Trimming any whitespace
		// 	[name]: formData
		//   });








	};
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData);
		// ... submit to API or something
	  };
	return (
		<div>




<div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 h-100">
  <div className="rounded-t-lg h-32 overflow-hidden">
    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
  </div>
 
  <div className="text-center mt-2">
    
    <p className="text-gray-500">World number one Novak Djokovic has claimed he is not anti-vaccination but would rather skip Grand Slams than be</p>
  </div>
  <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
  <form>
	
			
      
   
 
	<div className="flex justify-center">
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="yes" id="yes"  value={formData.yes} onChange={handleVote}/>
    <label className="form-check-label inline-block text-gray-800" >{formData.yes}</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="no" id="no" value={formData.no} onChange={handleVote}/>
    <label className="form-check-label inline-block text-gray-800" >{formData.no}</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="comment" id="comment" value={formData.comment} onChange={handleVote}/>
    <label className="form-check-label inline-block text-gray-800" >{formData.comment}</label>
  </div>
  
</div>




	<div className="p-4 border-t mx-8 mt-2">
    <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2" onClick={handleSubmit}>VOTe</button>
  </div>
  </form>
  </ul>
  

</div>












			
		</div>
	);
}

export default Voting;
