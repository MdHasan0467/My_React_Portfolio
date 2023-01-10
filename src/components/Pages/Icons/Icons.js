import React from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';



const Icons = () => {
    return (
        <div className='icons  '>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#fcd71b] cursor-pointer'>
						<a
							target={'_blank'}
							href='https://www.facebook.com/ornilhasan0467/'
						>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='Facebook'
							>
								<div className='icon'>
									<BsFacebook></BsFacebook>
								</div>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#ff3c78] cursor-pointer'>
						<a href=''>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='Twitter'
							>
								<div className='icon'>
									<BsTwitter></BsTwitter>
								</div>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#fcd71b] cursor-pointer'>
						<a target={'_blank'} href='https://github.com/MdHasan0467'>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='Github'
							>
								<div className='icon'>
									<BsGithub></BsGithub>
								</div>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#ff3c78] cursor-pointer'>
						<a
							target={'_blank'}
							href='https://www.linkedin.com/in/md-hasan-8aa8b7259/'
						>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='LinkedIn'
							>
								<div className='icon'>
									<BsLinkedin></BsLinkedin>
								</div>
							</div>
						</a>
					</div>
				</div>
    );
};

export default Icons;