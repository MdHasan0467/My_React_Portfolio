import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { animated, useSpring } from '@react-spring/web';

const About = () => {
		const styles = useSpring({
			to: async (next, cancel) => {
				await next({ opacity: 1, color: '#ffaaee' });
				await next({ opacity: 0, color: 'rgb(14,26,19)' });
			},
			from: { opacity: 0, color: 'red' },
		});

    return (
			<div className='bg-[#032249]'>
				<animated.div style={styles}>About Me</animated.div>
				<div className='hero min-h-screen bg-[#032249] text-white'>
					<div className='hero-content flex-col'>
						<div>
							<div className='my-10'>
								<h1 className='text-2xl text-start font-semibold'>
									Hello, <br /> This is MD Hasan
								</h1>
								<h2 className='text-start font-semibold'>
									I am a Front-End Developer with an amazing ability to develop
									websites that are both functional and aesthetically pleasing. 
									I am passionate about learning and sharing my knowledge with
									others as publicly as possible. I am passionate about making
									error-free websites with 100% client satisfaction. I am
									strategic and goal-oriented, and I always work with an end
									goal in mind. Over the past years, I created 100s of websites
									for my clients. I have a strong under-standing of web standards
									and best practices, and I am passionate about creating
									websites that users will find easy to use and visually
									appealing. I pride myself on doing quality work and maintaining
									excellent communication.
								</h2>
								
							</div>
							<Zoom left>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-7'>
									
									<div>
										<h1 className='text-5xl text-start font-bold border border-gray-400 shadow-lg shadow-gray-500 p-3 rounded-lg'>
											My Skills :
									</h1>
									<div className="flex justify-start my-7">
									<ul className="steps steps-vertical">
											<li className="step step-primary">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>HTML5</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 95, "--size": "3rem" }}>95%</span>
												</h1>
											</li>

											<li className="step step-primary my-3">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>CSS3</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 95, "--size": "3rem" }}>95%</span>
												</h1>
											</li>

											<li className="step step-primary my-3">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>TailwindCSS</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 95, "--size": "3rem" }}>95%</span>
												</h1>
											</li>

											<li className="step step-primary my-3">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>Bootstrap</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 95, "--size": "3rem" }}>95%</span>
												</h1>
											</li>
											<li className="step step-primary my-3">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>JavaScript</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 90, "--size": "3rem" }}>90%</span>
												</h1>
											</li>
											<li className="step step-primary my-3 ">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>React js</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 60, "--size": "3rem" }}>60%</span>
												</h1>
											</li>
											<li className="step step-primary my-3">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>Node js</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 50, "--size": "3rem" }}>50%</span>
												</h1>
											</li>
											<li className="step my-3 ">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>Express js</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 50, "--size": "3rem" }}>50%</span>
												</h1>
											</li>
											<li className="step my-3 ">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>Firebase</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 60, "--size": "3rem" }}>60%</span>
												</h1>
											</li>
											<li className="step my-3 ">
												<h1 className='flex justify-center'>
													<span className='w-auto my-auto'>MongoDB</span>
													<span className="radial-progress bg-primary text-white mx-5" style={{ "--value": 65, "--size": "3rem" }}>65%</span>
												</h1>
											</li>

									  </ul>
									</div>
										
									</div>
									<div>
										<h1 className='text-5xl text-start font-bold border border-gray-400 shadow-lg shadow-gray-500 p-3 rounded-lg'>
											Tools :
										</h1>
									<div className="flex justify-start my-7">
									<ul className="steps steps-vertical">
										<li className="step step-primary">Chrome Dev Tool</li>
										<li className="step step-primary">Visual Studio Code</li>
										<li className="step step-primary">Netlify</li>
										<li className="step">github</li>
										<li className="step">Vercel</li>
									  </ul>
									</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		);
};

export default About;


// <img
// 	src='my-desktop-pic.jpg'
// 	className='lg:max-w-sm rounded-lg shadow-2xl'
// />