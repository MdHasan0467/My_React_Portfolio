import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const OnlineCourseDetails = () => {
    return (
			<div>
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
							<PhotoView src='course.png'>
								<img
									className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
									className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
									className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
									className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
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
									className='object-cover object-center  h-96 w-[100%] md:w-52 my-5 md:my-2'
									src='courseBlog.png'
									alt='Photo'
								/>
							</PhotoView>
						</PhotoProvider>
					</div>
					<div className='card-body'>
						<h2 className='card-title text-yellow-400'>Online Course</h2>
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
						<div className='card-actions flex justify-end'>
							<button className='button'>
								<a
									target={'blank'}
									href='https://github.com/MdHasan0467/react-authentication-client'
								>
									Source Code
								</a>
							</button>
							<button className='button'>
								<a
									target={'blank'}
									href='https://assignment-ten-625db.web.app/courses'
								>
									Details
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default OnlineCourseDetails;