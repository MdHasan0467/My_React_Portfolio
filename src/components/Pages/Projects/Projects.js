import React from 'react';
import { useSpring } from '@react-spring/web';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
	    const styles = useSpring({
				to: async (next, cancel) => {
					await next({ opacity: 1, color: '#ffaaee' });
					await next({ opacity: 0, color: 'rgb(14,26,19)' });
				},
				from: { opacity: 0, color: 'red' },
			});
    return (
			<div className='min-h-screen bg-[#032249]'>
				<h1 className='text-4xl mb-20 pt-10 text-white font-serif font-bold'>
					My All Projects
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-7'>
					<div
						className='card w-96 bg-base-100 shadow-xl image-full'
						data-aos='fade-up'
						data-aos-duration='4000'
					>
						<figure>
							<img src='photography.jpg' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start font-bold font-serif'>
								A website for hiring a photographer
							</h1>
							<h2 className='text-lg text-white text-start font-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js, Node.js,MongoDB
							</p>
							<div className='card-actions flex justify-end'>
								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
									target={'blank'}
									href='https://github.com/MdHasan0467/Backend-and-database-integrate-client'
								>
									<BsGithub> </BsGithub>
								</a>

								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
									target={'blank'}
									href='https://assignment-eleven-30dd0.web.app/'
								>
									LIVE
								</a>
							</div>
						</div>
					</div>
					<div
						className='card w-96 bg-base-100 shadow-xl image-full'
						data-aos='flip-down'
						data-aos-duration='4000'
					>
						<figure>
							<img src='car-1.jpg' alt='Used Car' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start font-bold font-serif'>
								A website for buying used car
							</h1>
							<h2 className='text-lg text-white text-start font-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js, Node.js,MongoDB
							</p>
							<div className='card-actions flex justify-end'>
								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
									target={'blank'}
									href='https://github.com/MdHasan0467/build-won-complete-project-client'
								>
									<BsGithub> </BsGithub>
								</a>

								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
									target={'blank'}
									href='https://assignment-twelve-b5667.web.app/'
								>
									LIVE
								</a>
							</div>
						</div>
					</div>
					<div
						className='card w-96 bg-base-100 shadow-xl image-full'
						data-aos='fade-down-right'
						data-aos-duration='4000'
					>
						<figure>
							<img src='onlineCourse.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h1 className='text-lg text-yellow-400 text-start font-bold font-serif'>
								A website about online course
							</h1>
							<h2 className='text-lg text-white text-start font-bold font-serif'>
								Technologies used in this project:
							</h2>
							<p className='text-start'>
								React, React-Tailwindcss, React Router, TanStack Query, Cors,
								Dotenv, Express.js
							</p>
							<div className='card-actions flex justify-end'>
								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
									target={'blank'}
									href='https://github.com/MdHasan0467/react-authentication-client'
								>
									<BsGithub> </BsGithub>
								</a>

								<a
									className='button w-1/3 h-4/5  flex justify-center items-center'
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