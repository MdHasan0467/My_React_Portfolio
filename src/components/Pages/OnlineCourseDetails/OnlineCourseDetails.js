import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const OnlineCourseDetails = () => {
    return (
			<div className='bg-[#032249]'>
				<div className='card w-[100vw] glass h-[100%]'>
					<h1 className='text-start ml-28  my-2'>
						Click the image for view mode
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:mx-auto '>
						<PhotoProvider
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}
						>
							<PhotoView src='course.png'>
								<img
									className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg md:w-52 my-5 md:my-2'
									src='course.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>

						<PhotoProvider
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}
						>
							<PhotoView src='courseDetails.png'>
								<img
									className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg md:w-52 my-5 md:my-2'
									src='courseDetails.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>

						<PhotoProvider
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}
						>
							<PhotoView src='courseCheckout.png'>
								<img
									className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg md:w-52 my-5 md:my-2'
									src='courseCheckout.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>

						<PhotoProvider
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}
						>
							<PhotoView src='courseContact.png'>
								<img
									className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg md:w-52 my-5 md:my-2'
									src='courseContact.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>

						<PhotoProvider
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}
						>
							<PhotoView src='courseBlog.png'>
								<img
									className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg md:w-52 my-5 md:my-2'
									src='courseBlog.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>
					</div>
					<div className='card-body'>
						<h2 className='card-title text-yellow-400'>????Online Course</h2>
						<p className='text-start'>
							* This project is about a platform of online course sells.
						</p>
						<p className='text-start'>
							* From this website a login user can buy a course.
						</p>
						<p className='text-start'>
							* authentication system. User can easily registration and login.
							User also login with Google .
						</p>
						<p className='text-start'>
							* Private route is also used for premium section. The project is
							mobile friendly responsive.
						</p>
						<h1 className='text-lg text-[#4325c5] animate-bounce text-start text-bold font-serif'>
							???? Technologies used in this project:
						</h1>
						<p className='text-start'>
							<span className='text-gray-800 font-bold'>Frontend:</span> React,
							React-Tailwindcss, React Router, TanStack Query and etc.
						</p>

						<p className='text-start'>
							<span className='text-gray-800 font-bold'>Backend :</span> Cors,
							Dotenv, Express.js, Node.js
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
		);
};

export default OnlineCourseDetails;