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
							<div className='flex justify-around my-7'>
								<div>
									<h1 className='text-5xl text-start font-bold'>My Skills</h1>
									<ul className='my-5'>
										<li className='text-start'>HTML5</li>
										<li className='text-start'>CSS3</li>
										<li className='text-start'>Tailwindcss</li>
										<li className='text-start'>Bootstrap</li>
										<li className='text-start'>JavaScript</li>
										<li className='text-start'>React js</li>
										<li className='text-start'>Node js</li>
										<li className='text-start'>Firebase</li>
										<li className='text-start'>MongoDB</li>
									</ul>
								</div>
								<div>
									<h1 className='text-5xl text-start font-bold'>Tools</h1>
									<ul className='my-5'>
										<li className='text-start'>Chrome Dev Tool</li>
										<li className='text-start'>Visual Studio Code</li>
										<li className='text-start'>Netlify</li>
										<li className='text-start'>github</li>
										<li className='text-start'>Vercel</li>
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