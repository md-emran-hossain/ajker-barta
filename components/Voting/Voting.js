import { Container, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

export default function Voting({ polls }) {
	const voting = polls?.slice(0, 3);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log(data)
	};

	return (
		<div className='container'>
			<h2 >this is Voting</h2>
			<div className='flex gap-6'>
				{
					voting?.map(vote => <div key={vote?._id}>
						<h1 className='my-3 text-2xl'>{vote?.question}</h1>
						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
							<div className='flex items-center justify-between'>
								<span><input id={`yes${vote._id}`} {...register("radio")} type="radio" value="yes" /> <label htmlFor={`yes${vote?._id}`}>Yes</label></span>
								<span>5%</span>
							</div>
							<div className='flex items-center justify-between'>
								<span><input id={`no${vote?._id}`} {...register("radio")} type="radio" value="no" /> <label htmlFor={`no${vote?._id}`}>No</label></span>
								<span>5%</span>
							</div>
							<div className='flex items-center justify-between'>
								<span><input id={`noComments${vote?._id}`} {...register("radio")} type="radio" value="noComments" /> <label htmlFor={`noComments${vote?._id}`}>No comments</label></span>
								<span>5%</span>
							</div>

							<div>
								<input type="submit" value="vote" className='bg-green-500 px-6  rounded-md' />
							</div>
						</form>
					</div>)
				}
			</div>
		</div>
	)
};


export const getStaticProps = async () => {
	const res = await axios.get(`http://localhost:3000/api/poll`);
	return {
		props: {
			polls: res.data,
		},
		revalidate: 10,
	};
};

