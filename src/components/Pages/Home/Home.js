import React from 'react';
import Banner from './Banner/Banner';
import ProjectsForHome from './ProjectsForHome/ProjectsForHome';


const Home = () => {
    return (
			<div className='min-h-screen'>
				<Banner></Banner>
				<ProjectsForHome></ProjectsForHome>
			</div>
		);
};

export default Home;