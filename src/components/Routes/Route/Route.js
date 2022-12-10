import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Main from '../Main/Main';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/projects',
                    element:<Projects></Projects>
                },
                {
                    path: '/about',
                    element:<About></About>
                },
                {
                    path: '/contact',
                    element:<Contact></Contact>
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;