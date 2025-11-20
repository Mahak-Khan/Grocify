// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cakes from './Components/Cakes/Cakes';
import Cookies from './Components/Cookies/Cookies';
import Breads from './Components/Breads/Breads';
import AllProducts from './Components/AllProducts/AllProducts';
import Contact from './Components/Contact/Contact';
import Process from './Components/Process/Process';
import About from './Components/About/About';
import SearchResults from './Components/SearchResults/SearchResults'; // New page for search

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Cakes', element: <Cakes /> },
      { path: '/Cookies', element: <Cookies /> },
      { path: '/Breads', element: <Breads /> },
      { path: '/AllProducts', element: <AllProducts /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Process', element: <Process /> },
      { path: '/About', element: <About /> },
      { path: '/search', element: <SearchResults /> }, // Route for search
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
