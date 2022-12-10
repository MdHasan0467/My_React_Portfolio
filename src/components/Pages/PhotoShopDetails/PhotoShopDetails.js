import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoShopDetails = () => {
	return (
		<div className=''>
			<div className='card w-[100vw] glass h-[100%]'>
				<h1 className='text-start md:ml-28  my-2'>
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
								className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
								className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
								className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
								className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
								className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
								src='photoShopLogin.png'
								alt='Photo'
							/>
						</PhotoView>
					</PhotoProvider>
				</div>
				<div className='card-body'>
					<h2 className='card-title text-yellow-400'>BD Photographer</h2>
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
					<div className='card-actions flex justify-end'>
						<button className='button'>
							<a
								target={'blank'}
								href='https://github.com/MdHasan0467/Backend-and-database-integrate-client'
							>
								Source Code
							</a>
						</button>
						<button className='button'>
							<a
								target={'blank'}
								href='https://assignment-eleven-30dd0.web.app/'
							>
								LIVE
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoShopDetails;
