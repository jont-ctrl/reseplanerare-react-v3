import { useState } from 'react';
import Header from './components/Header';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ActivityDetails from './components/ActvitiyDetails';
import ReseTips from './components/ReseTips';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/new',
    element: <ActivityForm />,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/details/:activityID',
    element: <ActivityDetails />,
  },
  {
    path: '/resetips',
    element: <ReseTips />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
