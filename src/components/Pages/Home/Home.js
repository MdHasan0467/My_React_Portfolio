import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import ProjectsForHome from './ProjectsForHome/ProjectsForHome';
import WhyHireME from './WhyHireME/WhyHireME';


const Home = () => {
    return (
			<div className='min-h-screen pb-10 bg-[#032249]'>
			<Banner></Banner>
			<WhyHireME></WhyHireME>
			<ProjectsForHome></ProjectsForHome>
			<Contact></Contact>
			</div>
		);
};

export default Home;