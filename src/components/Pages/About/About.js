import React from 'react';

const About = () => {
    return (
			<div>
				<div className='hero min-h-screen bg-[#242734] text-white'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<img
							src='downloadMyPic.jpg'
							className='max-w-sm rounded-lg shadow-2xl'
						/>
						<div>
							<div className='my-10'>
								<h1 className='text-2xl text-start font-semibold'>
									Hello, <br /> This is MD Hasan
								</h1>
								<h2 className='text-start font-semibold'>
									I am a Front-End Developer with an amazing ability to develop
									websites that are both functional and aesthetically pleasing.
									I have a strong under-standing of web standards and best
									practices, and I am passionate about creating websites that
									users will find easy to use and visually appealing.
								</h2>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-7'>
								<div>
									<h1 className='text-5xl text-start font-bold border border-gray-400 shadow-lg shadow-gray-500 p-3 rounded-lg'>
										My Skills :
									</h1>
									<ul className='my-7'>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ HTML5</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ CSS3</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Tailwindcss</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Bootstrap</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ JavaScript</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ React js</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Node js</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Firebase</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ MongoDB</li>
									</ul>
								</div>
								<div>
									<h1 className='text-5xl text-start font-bold border border-gray-400 shadow-lg shadow-gray-500 p-3 rounded-lg'>
										Tools :
									</h1>
									<ul className='my-7'>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Chrome Dev Tool</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Visual Studio Code</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Netlify</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ github</li>
										<li className='text-start hover:text-yellow-400 cursor-pointer'> ✅ Vercel</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default About;