import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Main = () => {
    return (
			<div className='bg-[#2a2d3a] text-white'>
				<Navbar></Navbar>
				<Outlet></Outlet>
			</div>
		);
};

export default Main;