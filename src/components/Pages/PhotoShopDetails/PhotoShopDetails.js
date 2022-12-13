import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoShopDetails = () => {
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
						<PhotoView src='photoShopHome.png'>
							<img
								className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg my-5 md:my-2'
								src='photoShopHome.png'
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
						<PhotoView src='photoShopAllDetails.png'>
							<img
								className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg my-5 md:my-2'
								src='photoShopAllDetails.png'
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
						<PhotoView src='photoShopMyReview.png'>
							<img
								className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg my-5 md:my-2'
								src='photoShopMyReview.png'
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
						<PhotoView src='photoShopAddASurvice.png'>
							<img
								className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg my-5 md:my-2'
								src='photoShopAddASurvice.png'
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
						<PhotoView src='photoShopLogin.png'>
							<img
								className='object-cover object-center  h-96 w-[90%] md:w-52 mx-5 md:mx-0 rounded-lg my-5 md:my-2'
								src='photoShopLogin.png'
								alt='Photo'
							/>
						</PhotoView>
					</PhotoProvider>
				</div>
				<div className='card-body'>
					<h2 className='card-title text-yellow-400'>🔰 BD Photographer</h2>
					<p className='text-start'>
						* This project is about a photographer portfolio.
					</p>
					<p className='text-start'>
						* Anyone can see his/her work experiences and hire him/her.
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
						🔰 Technologies used in this project:
					</h1>
					<p className='text-start'>
						<span className='text-gray-800 font-bold'>Frontend:</span> React,
						React-Tailwindcss, React Router, TanStack Query and etc.
					</p>

					<p className='text-start'>
						<span className='text-gray-800 font-bold'>Backend :</span> Cors,
						Dotenv, Express.js, Node.js
					</p>
					<p className='text-start'>
						<span className='text-gray-800 font-bold'>Database:</span> MongoDB
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
		</div>
	);
};

export default PhotoShopDetails;
