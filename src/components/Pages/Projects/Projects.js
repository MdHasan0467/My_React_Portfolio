import React from 'react';

const Projects = () => {
    return (
			<div className='min-h-screen'>
				<h1 className='text-4xl mb-20 text-pink-500 font-serif font-bold'>
					My All Projects
				</h1>
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
								<a
									className='button'
									target={'blank'}
									href='https://github.com/MdHasan0467/Backend-and-database-integrate-client'
								>
									Source Code
								</a>

								<a
									className='button'
									target={'blank'}
									href='https://assignment-eleven-30dd0.web.app/'
								>
									LIVE
								</a>
							</div>
						</div>
					</div>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='usedCarCover.png' alt='Used Car' />
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
								<a
									className='button'
									target={'blank'}
									href='https://github.com/MdHasan0467/build-won-complete-project-client'
								>
									Source Code
								</a>

								<a
									className='button'
									target={'blank'}
									href='https://assignment-twelve-b5667.web.app/'
								>
									LIVE
								</a>
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
								<a
									className='button'
									target={'blank'}
									href='https://github.com/MdHasan0467/react-authentication-client'
								>
									Source Code
								</a>

								<a
									className='button'
									target={'blank'}
									href='https://assignment-ten-625db.web.app/courses'
								>
									LIVE
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Projects;