import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './Components/Header/Header';
import Home from './Components/Main/Home/Home';
import Statistics from './Components/Main/Statistics/Statistics';
import Blogs from './Components/Main/Blogs/Blogs';
import JobDetails from './Components/Main/Home/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied_jobs",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => {
          return params;
        },

      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <div style={{ color: 'red' }}><h1>404 not found</h1><h4>Please enter a valid request</h4></div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
