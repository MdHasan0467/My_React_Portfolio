import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
			<div className=''>
				<div className='navbar bg-[#2a2d3a] hidden md:flex'>
					<div className='flex-1'>
						<Link to='/'><img className='w-[100px]' src='hasanText.png' alt='' /></Link>
					</div>

					<div className='flex-none'>
						<ul className='menu menu-horizontal p-0 hidden md:flex'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/projects'>Projects</Link>
							</li>
							
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='navbar bg-[#2a2d3a] flex md:hidden'>
					<div className='flex-1'>
						<Link to='/'><img className='w-[100px]' src='hasanText.png' alt='' /></Link>
					</div>
					<div className='flex-none'>
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<h1 className='text-4xl rounded-full'>⁑</h1>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1f212c] rounded-box w-52'
							>
								<li>
									<Link to='/'>Home</Link>
								</li>
								<li>
									<Link to='/about'>About</Link>
								</li>
								<li>
									<Link to='/projects'>Projects</Link>
								</li>
								
								<li>
									<Link to='/contact'>Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Navbar;