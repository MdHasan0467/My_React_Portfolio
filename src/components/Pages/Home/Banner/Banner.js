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
							className=' lg:max-w-sm rounded-lg shadow-2xl'
						/>
						<div>
							<h2 className=' title'>{state.title}</h2>
							<h2 className=' titleTwo'>{state.titleTwo}</h2>
							<h2 className=' titleThree'>{state.titleThree}</h2>

							<div className='flex mx-2'>
								<button className='button font-serif font-bold'>HIRE ME</button>
								<button className='button  font-serif font-bold mx-3'>
									<a
										target={'_blank'}
										href='https://drive.google.com/file/d/1PeVj9omaA-88c1TrNBZHNgbGkqRGzrLd/view?usp=sharing'
									>
										RESUME
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;