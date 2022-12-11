import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const Banner = () => {
    const [state] = useState({
			title: 'Hello,',
        titleTwo: "I'm  MD HASAN",
        titleThree: "I'm  a web developer",
	});
	
	// 
			const styles = useSpring({
				to: async (next, cancel) => {
					await next({ opacity: 1, color: '#ffaaee' });
					await next({ opacity: 0, color: 'rgb(14,26,19)' });
				},
				from: { opacity: 0, color: 'red' },
			});
    return (
			<div>
			<animated.div style={styles}>Home Page</animated.div>
				<div className='hero min-h-screen bg-[#242734]'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<img
							src='meRemove.png'
							className='lg:max-w-sm rounded-lg shadow-2xl'
						/>
						<div>
							<h2 className=' title text-4xl text-start my-2'>{state.title}</h2>
							<h2 className=' titleTwo text-4xl text-start my-2'>
								{state.titleTwo}
							</h2>
							<h2 className=' titleThree text-2xl text-start my-2'>
								{state.titleThree}
							</h2>

							<div className='flex mx-2 mt-20'>
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