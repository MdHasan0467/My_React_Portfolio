import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import Flip from 'react-reveal/Flip';

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
		<div className='bg-[#032249]'>
			<animated.div style={styles}>Home</animated.div>
			<div className='hero min-h-screen banner relative'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<Zoom right>
						<img
							src='meRemove.png'
							className='md:max-w-sm rounded-lg  profileBG hidden md:block shadow-2xl'
						/>
					</Zoom>
					<Flip left>
						<img
							src='meRemove.png'
							className=' rounded-lg md:hidden block profileBGMobile shadow-2xl'
						/>
					</Flip>
					<div>
						<div className='mt-10 md:mt-0'>
							<h2 className=' title text-4xl text-start my-2'>{state.title}</h2>
							<h2 className=' titleTwo text-4xl text-start my-2'>
								{state.titleTwo}
							</h2>
							<h2 className=' titleThree text-2xl text-start my-2'>
								{state.titleThree}
							</h2>
						</div>

						<div className='flex mx-2 mt-20'>
							<button className='button font-serif font-bold'>
								<Link to='/contact'>HIRE ME</Link>
							</button>
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
				<div className='icons hidden md:block md:absolute md:right-10 md:top-[35%]'>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#fcd71b] cursor-pointer icon'>
						<a
							target={'_blank'}
							href='https://www.facebook.com/ornilhasan0467/'
						>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='Facebook'
							>
								<BsFacebook></BsFacebook>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#ff3c78] cursor-pointer icon'>
						<a href=''>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='. . .'
							>
								<BsTwitter></BsTwitter>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#fcd71b] cursor-pointer icon'>
						<a target={'_blank'} href='https://github.com/MdHasan0467'>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='Github'
							>
								<BsGithub></BsGithub>
							</div>
						</a>
					</div>
					<div className='md:my-5 mx-5 md:mx-0 text-2xl hover:text-[#ff3c78] cursor-pointer icon'>
						<a
							target={'_blank'}
							href='https://www.linkedin.com/in/md-hasan-8aa8b7259/'
						>
							<div
								className='tooltip hover:tooltip-open tooltip-left tooltip-primary'
								data-tip='LinkedIn'
							>
								<BsLinkedin></BsLinkedin>
							</div>
						</a>
					</div>
				</div>
				<div className='icons block md:hidden absolute right-5 top-[12%]'>
					<div className='my-5 mx-5 text-2xl hover:text-blue-700 cursor-pointer iconMobile'>
						<a
							target={'_blank'}
							href='https://www.facebook.com/ornilhasan0467/'
						>
							<BsFacebook></BsFacebook>
						</a>
					</div>
					<div className='my-5 mx-5 text-2xl hover:text-white cursor-pointer iconMobile'>
						<a href=''>
							<BsTwitter></BsTwitter>
						</a>
					</div>
					<div className='my-5 mx-5 text-2xl hover:text-gray-700 cursor-pointer iconMobile'>
						<a target={'_blank'} href='https://github.com/MdHasan0467'>
							<BsGithub></BsGithub>
						</a>
					</div>
					<div className='my-5 mx-5 text-2xl hover:text-white cursor-pointer iconMobile'>
						<a
							target={'_blank'}
							href='https://www.linkedin.com/in/md-hasan-8aa8b7259/'
						>
							<BsLinkedin></BsLinkedin>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
