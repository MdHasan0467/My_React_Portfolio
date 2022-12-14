import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../../Pages/About/About';
import Blogs from '../../Pages/Blogs/Blogs';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import OnlineCourseDetails from '../../Pages/OnlineCourseDetails/OnlineCourseDetails';
import PhotoShopDetails from '../../Pages/PhotoShopDetails/PhotoShopDetails';
import Projects from '../../Pages/Projects/Projects';
import UsedCarDetails from '../../Pages/UsedCarDetails/UsedCarDetails';
import Error from '../../Shared/Error/Error';
import Main from '../Main/Main';

const Route = () => {
    const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{
						path: '/',
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/projects',
						element: <Projects></Projects>,
					},
					{
						path: '/about',
						element: <About></About>,
					},
					{
						path: '/blogs',
						element: <Blogs></Blogs>
					},
					{
						path: '/contact',
						element: <Contact></Contact>,
					},
					{
						path: '/photoshopdetails',
						element: <PhotoShopDetails></PhotoShopDetails>,
					},
					{
						path: '/onlinecoursedetails',
						element: <OnlineCourseDetails></OnlineCourseDetails>,
					},
					{
						path: '/usedcardetails',
						element: <UsedCarDetails></UsedCarDetails>,
					},
				],
		},
		{
			path: '*',
			element:<Error></Error>
		}
		]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;