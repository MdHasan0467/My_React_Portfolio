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
							<div className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text text-white'>Email</span>
									</label>
									<input
										type='text'
										placeholder='email'
										className='input input-bordered'
									/>
								</div>

								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Contact Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Contact;