import React from 'react';
import Contact from '../Contact/Contact';
import Icons from '../Icons/Icons';
import Banner from './Banner/Banner';
import ProjectsForHome from './ProjectsForHome/ProjectsForHome';
import WhyHireME from './WhyHireME/WhyHireME';


const Home = () => {
    return (
		<div className='min-h-screen pb-10 bg-[#032249] relative'>
			<div className='fixed right-10'>
			<Icons></Icons>
			</div>
			<Banner></Banner>
			<div className='w-[90%]'>
			<WhyHireME></WhyHireME>
			</div>
			<div className="mt-5 w-[90%]">
			<ProjectsForHome></ProjectsForHome>
			</div>
			<Contact></Contact>
			</div>
		);
};

export default Home;