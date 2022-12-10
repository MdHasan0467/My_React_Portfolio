import React from 'react';

const Contact = () => {
    return (
			<div>
				<div className='hero min-h-screen bg-[#242734] text-white'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<p className='py-6'>
								To contact with me please provide your email address.
							</p>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#242734] text-white'>
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
										placeholder='Your message'
									></textarea>
								</div>

								<div className='form-control mt-6'>
									<button type='submit' className='btn btn-primary'>
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