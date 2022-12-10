import React from 'react';

const Projects = () => {
    return (
		<div className='min-h-screen'>
			<h1 className='text-4xl mb-20 text-pink-500 font-serif font-bold'>My All Projects</h1>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-7'>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='photoShopCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<p>A website for hiring a photographer</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>
									<a
										target={'blank'}
										href='https://assignment-eleven-30dd0.web.app/'
									>
										Details
									</a>
								</button>
							</div>
						</div>
					</div>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='usedCarCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<p>A website for buying used car</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>
									<a
										target={'blank'}
										href='https://assignment-twelve-b5667.web.app/'
									>
										Details
									</a>
								</button>
							</div>
						</div>
					</div>
					<div className='card w-96 bg-base-100 shadow-xl image-full'>
						<figure>
							<img src='courseCover.png' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<p>A website about online course</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>
									<a
										target={'blank'}
										href='https://assignment-ten-625db.web.app/courses'
									>
										Details
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Projects;