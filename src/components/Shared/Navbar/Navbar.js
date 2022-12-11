import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
			<div className=''>
				<div className='navbar bg-[#2a2d3a] hidden md:flex'>
					<div className='flex-1'>
						<Link className='flex' to='/'>
							<img className='w-[60px] h-[60px] mt-3' src='hLogo.png' alt='Logo' />
							<img className='w-[100px]' src='hasanText.png' alt='' />
						</Link>
					</div>

					<div className='flex-none'>
						<ul className='menu menu-horizontal p-0 hidden md:flex'>
							<li>
								<Link className='nav' to='/'>Home</Link>
							</li>
							<li>
								<Link className='nav' to='/about'>About</Link>
							</li>
							<li>
								<Link className='nav' to='/projects'>Projects</Link>
							</li>

							<li>
								<Link className='nav' to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='navbar bg-[#2a2d3a] flex md:hidden'>
					<div className='flex-1'>
					<Link className='flex' to='/'>
						<img className='w-[60px] h-[60px] mt-3' src='hLogo.png' alt='Logo' />
							<img className='w-[100px]' src='hasanText.png' alt='' />
						</Link>
					</div>
					<div className='flex-none'>
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<h1 className='text-4xl rounded-full'>⁑</h1>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 pb-4 shadow bg-[#1f212c] rounded-box w-52'
							>
								<li>
									<Link className='nav mt-5' to='/'>Home</Link>
								</li>
								<li>
									<Link className='nav mt-5' to='/about'>About</Link>
								</li>
								<li>
									<Link className='nav mt-5' to='/projects'>Projects</Link>
								</li>

								<li>
									<Link className='nav mt-5' to='/contact'>Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Navbar;