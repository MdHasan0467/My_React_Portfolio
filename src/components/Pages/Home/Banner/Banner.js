import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

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
							<h1 className='text-5xl font-bold'>Box Office News!</h1>
                        <p className=' title'>{state.title}</p>
                        <p className=' titleTwo'>{state.titleTwo}</p>
                        <p className=' titleThree'>{state.titleThree}</p>
                        <div className='text'>
                            <Typewriter option={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            string: [
                                "I'm a web developer",
                                "I'm a react developer",
                                "I'm a front-end developer"
                            ],
                            }}/>
                        </div>
							<button className='button'>Get Started</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;