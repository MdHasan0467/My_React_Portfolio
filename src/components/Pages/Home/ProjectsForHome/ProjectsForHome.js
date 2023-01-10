import React from 'react';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
import { Zoom } from 'react-reveal';
import Flip from 'react-reveal/Flip';


const ProjectsForHome = () => {

    return (
			<div className='bg-[#032249]'>
				<h1 className='py-5 flex justify-center text-3xl text-start font-bold  p-3 rounded-lg m-5 mb-10'>
					My Projects :
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-7'>
					<LightSpeed left>
					<div className='card px-8 py-10 relative h-[550px] w-96 border border-gray-500 banner opacity-0 hover:opacity-70'>
						<img src="photography.jpg" alt="" />
							<div className='card-body group'>
								<h1 className='mt-[-20px] text-white text-2xl text-start text-bold font-serif'>
									Photographer Portfolio
								</h1>
								<h2 className='text-lg text-white text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-white'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js, Node.js,MongoDB
								</p>
								<div className='card-actions hidden group-hover:flex justify-end'>
									<Link className='button' to='/photoshopdetails'>
										Details
									</Link>
								</div>
							</div>
						</div>
					</LightSpeed>
					<Zoom left>
					<div className='card px-8 py-10 relative h-[550px] w-96 border border-gray-500 banner opacity-0 hover:opacity-70'>
					<img src="car-1.jpg" alt="" />
							<div className='card-body group'>
								<h1 className='mt-[-20px] text-white text-3xl text-start text-bold font-serif'>
									Used Car Sell Shop
								</h1>
								<h2 className='text-lg text-white text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-white'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js, Node.js,MongoDB
								</p>

								<div className='card-actions hidden group-hover:flex justify-end'>
									<Link className='button' to='/usedcardetails'>
										Details
									</Link>
								</div>
							</div>
						</div>
					</Zoom>
					<Flip left>
					<div className='card px-8 py-10 h-[550px] relative  w-96 border border-gray-500 banner opacity-0 hover:opacity-70'>
						<img src="onlineCourse.png" alt="" />
							<div className='card-body group '>
								<h1 className='mt-[-20px] text-white text-3xl text-start text-bold font-serif'>
									Online Course
								</h1>
								<h2 className='text-lg text-white text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-white'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js
								</p>
								<div className='card-actions hidden group-hover:flex justify-end'>
									<Link className='button' to='/onlinecoursedetails'>
										Details
									</Link>
								</div>
							</div>
						</div>
					</Flip>
				</div>
			</div>
		);
};

export default ProjectsForHome;