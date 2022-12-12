import React from 'react';
import Banner from './Banner/Banner';
import ProjectsForHome from './ProjectsForHome/ProjectsForHome';
import { motion } from 'framer-motion';
// import './styles.css';


const Home = () => {
const [isActive, setIsActive] = React.useState(false);
    return (
			<div className='min-h-screen'>
				<Banner></Banner>
				<ProjectsForHome></ProjectsForHome>
				<motion.div
					className='block'
					onClick={() => setIsActive(!isActive)}
					animate={{
						rotate: isActive ? 180 : 360,
					}}
				>
					Hello Framer motion
				</motion.div>
			</div>
		);
};

export default Home;