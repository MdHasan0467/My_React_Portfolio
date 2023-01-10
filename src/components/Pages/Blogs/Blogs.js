import React from 'react';
import { useSpring } from '@react-spring/web';


const Blogs = () => {
    const styles = useSpring({
			to: async (next, cancel) => {
				await next({ opacity: 1, color: '#ffaaee' });
				await next({ opacity: 0, color: 'rgb(14,26,19)' });
			},
			from: { opacity: 0, color: 'red' },
		});
    return (
			<div className='bg-[#032249]'>
				<div className='hero min-h-screen bg-[#032249] text-white'>
					<h1>
						Coming Soon <span className='animate-ping'> . . . </span>
					</h1>
				</div>
			</div>
		);
};

export default Blogs;