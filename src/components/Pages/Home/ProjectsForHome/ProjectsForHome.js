import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsForHome = () => {
    return (
			<div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-7'>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='photoShopCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start text-bold font-serif'>
								A website for hiring a photographer
							</h1>
							<h2 className='text-lg text-pink-500 text-start text-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js, Node.js,MongoDB
							</p>
							<div className='card-actions flex justify-end'>
								<button className='button'>
									<Link to='/photoshopdetails'>Details</Link>
								</button>
							</div>
						</div>
					</div>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='usedCarCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start text-bold font-serif'>
								A website for buying used car
							</h1>
							<h2 className='text-lg text-pink-500 text-start text-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js, Node.js,MongoDB
							</p>
							<div className='card-actions flex justify-end'>
								<button className='button'>
									<Link to='/usedcardetails'>Details</Link>
								</button>
							</div>
						</div>
					</div>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='courseCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start text-bold font-serif'>
								A website about online course
							</h1>
							<h2 className='text-lg text-pink-500 text-start text-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js
							</p>
							<div className='card-actions flex justify-end'>
								<button className='button'>
									<Link to='/onlinecoursedetails'>Details</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default ProjectsForHome;