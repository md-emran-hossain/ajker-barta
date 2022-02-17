import { useState } from "react";

function Voting() {
	const initialState = {
		yes: 7,
		no: 4,
		comment: 4,
	};

    
	const [python, setPython] = useState(initialState.yes);
	const [javascript, setJavascript] = useState(initialState.no);
	const [comment, setComment] = useState(initialState.comment);
    console.log(python);
	const handleVote = (e) => {
		if (e.target.id === "python") {
			setPython(python + 1);
			setJavascript(initialState.no);
		}
		if (e.target.id === "javascript") {
			setJavascript(javascript + 1);
			setPython(initialState.yes);
		}
		if (e.target.id === "comment") {
			setComment(comment + 1);
			setPython(initialState.yes);
            setJavascript(initialState.no);
		}
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
    <li className="flex flex-col items-center justify-around">
    <input
						type="radio"
						name="favLang"
						id="python"
						onChange={handleVote}
                       
					/>Yes
					
      <div><label htmlFor="python">{python} %</label></div>
    </li>
    <li className="flex flex-col items-center justify-between">
    <input
						type="radio"
						name="favLang"
						id="javascript"
						onChange={handleVote}
					/>No
					
      <div><label htmlFor="javascript">{javascript} %</label></div>
    </li>
    <li className="flex flex-col items-center justify-around">
    <input
						type="radio"
						name="favLang"
						id="comment"
						onChange={handleVote}
					/>No Comment
					
      <div><label htmlFor="setComment"> {comment} %</label></div>
    </li>
  </ul>
  <div className="p-4 border-t mx-8 mt-2">
    <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">VOTe</button>
  </div>
</div>












			
		</div>
	);
}

export default Voting;
