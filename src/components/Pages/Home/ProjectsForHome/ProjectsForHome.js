import React from 'react';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
import { Zoom } from 'react-reveal';
import Flip from 'react-reveal/Flip';


const ProjectsForHome = () => {

    return (
			<div>
				<h1 className='text-5xl text-start font-bold border border-gray-400 shadow-lg shadow-gray-700 p-3 rounded-lg m-5 mb-10'>
					My Projects :
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-7'>
					<LightSpeed left>
						<div className='card px-8 py-10 relative  w-96 border border-gray-500 cardBG opacity-0 hover:opacity-70'>
							<div className='card-body'>
								<h1 className='mt-[-20px] text-white text-2xl text-start text-bold font-serif'>
									Photographer Portfolio
								</h1>
								<h2 className='text-lg text-gray-800 text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-gray-800'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js, Node.js,MongoDB
								</p>
								<div className='card-actions flex justify-end'>
									<Link className='button' to='/photoshopdetails'>
										Details
									</Link>
								</div>
							</div>
						</div>
					</LightSpeed>
					<Zoom left>
						<div className='card px-8 py-10 relative  w-96 border border-gray-500 cardBG opacity-0 hover:opacity-70'>
							<div className='card-body'>
								<h1 className='mt-[-20px] text-white text-3xl text-start text-bold font-serif'>
									Used Car Sell Shop
								</h1>
								<h2 className='text-lg text-gray-800 text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-gray-800'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js, Node.js,MongoDB
								</p>

								<div className='card-actions flex justify-end'>
									<Link className='button' to='/usedcardetails'>
										Details
									</Link>
								</div>
							</div>
						</div>
					</Zoom>
					<Flip left>
						<div className='card px-8 py-10 relative  w-96 border border-gray-500 cardBG opacity-0 hover:opacity-70'>
							<div className='card-body'>
								<h1 className='mt-[-20px] text-white text-3xl text-start text-bold font-serif'>
									Online Course
								</h1>
								<h2 className='text-lg text-gray-800 text-start text-bold font-serif'>
									Technologies used:
								</h2>
								<p className='text-start text-gray-800'>
									React, React-Tailwindcss, React Router, TanStack Query, Cors,
									Dotenv, Express.js
								</p>
								<div className='card-actions flex justify-end'>
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