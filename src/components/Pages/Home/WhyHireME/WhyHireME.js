import React from 'react';
import { Link } from 'react-router-dom';

const WhyHireME = () => {
    return (
			<div className='bg-[#032249] my-5 md:mx-28'>
				<div className='card lg:card-side bg-[#032249] shadow-xl'>
					<img className='md:flex hidden' src='meRemoveHalf.png' alt='Album' />

					<div className='card-body'>
						<h2 className='font-serif text-3xl text-start'>Why You Hire Me?</h2>
						<p className='text-start'>
							Over the past years, I created 100s of websites for my clients. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing. I pride myself on doing quality work and maintaining excellent communication.
						</p>
						<div className='stats bg-[#0a2f5c] text-white shadow my-7'>
							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										className='inline-block w-8 h-8 stroke-current'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										></path>
									</svg>
								</div>
								<div className='stat-title'>SUCCESS RATE</div>
								<div className='stat-value'>100%</div>
								<div className='stat-desc'>2021 - present</div>
							</div>

							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										className='inline-block w-8 h-8 stroke-current'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
										></path>
									</svg>
								</div>
								<div className='stat-title'>HOURS OF WORK</div>
								<div className='stat-value'>1000 + </div>
							</div>

							<div className='stat'>
								<div className='stat-figure text-secondary'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										className='inline-block w-8 h-8 stroke-current'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
										></path>
									</svg>
								</div>
								<div className='stat-title'>HAPPY CLIENTS</div>
								<div className='stat-value'>450 +</div>
							</div>
						</div>
						<div className='card-actions justify-end'>
							<Link to='/about'>
								<button className='button'>About Me</button>
							</Link>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		);
};

export default WhyHireME;