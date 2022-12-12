import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
			<div className=' min-h-screen bg-[#242734] text-white'>
				<div className='flex justify-center'>
					<img src='error.png' alt='Error' />
            </div>
            <div className="flex justify-center text-4xl mb-10"><h1>Page Not Found !</h1></div>
				<Link to='/'>
					<button className='button'>Go Home</button>
				</Link>
			</div>
		);
};

export default Error;