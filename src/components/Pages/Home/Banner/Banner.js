import React, { useState } from 'react';
// import Typewriter from 'typewriter-effect';

const Banner = () => {
    const [state] = useState({
			title: 'Hello,',
        titleTwo: "I'm  MD HASAN",
        titleThree: "I'm  a web developer",
		});
    return (
			<div>
				<div className='hero min-h-screen bg-[#242734]'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<img
							src='meRemove.png'
							className='max-w-sm rounded-lg shadow-2xl'
						/>
						<div>
							<h2 className=' title'>{state.title}</h2>
							<h2 className=' titleTwo'>{state.titleTwo}</h2>
							<h2 className=' titleThree'>{state.titleThree}</h2>
							
							<button className='button'>HIRE ME</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;