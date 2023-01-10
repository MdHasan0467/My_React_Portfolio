import React from 'react';
import { useSpring } from '@react-spring/web';

const Contact = () => {
	 const styles = useSpring({
			to: async (next, cancel) => {
				await next({ opacity: 1, color: '#ffaaee' });
				await next({ opacity: 0, color: 'rgb(14,26,19)' });
			},
			from: { opacity: 0, color: 'red' },
		});
    return (
			<div className='bg-[#032249]'>
			<h1 className='text-start font-serif font-bold flex justify-center pt-20 text-2xl'>For hiring or any information</h1>
			<h1 className='text-start font-serif font-bold flex justify-center text-2xl'>Please contact with me</h1>
				<div className='hero min-h-screen bg-[#032249] text-white'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<p className='py-6'>
								To contact with me please provide your email address.
							</p>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl cardBG text-white'>
							<form
								action='https://formspree.io/f/mvoyedly'
								method='POST'
								className='card-body'
							>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text text-white'>Email</span>
									</label>
									<input
										type='email'
										name='email'
										placeholder='Your email'
										className='input text-gray-800 input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text text-white'>message</span>
									</label>
									<textarea
										name='message'
										className='textarea text-gray-800 textarea-bordered'
										placeholder='Your message for me'
									></textarea>
								</div>

								<div className='form-control mt-6'>
									<button type='submit' className='button'>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Contact;