import { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Lazy load all components
const HomePage = lazy(() => import('./components/HomePage'));
const ActivityForm = lazy(() => import('./components/ActivityForm'));
const ActivityList = lazy(() => import('./components/ActivityList'));
const Details = lazy(() => import('./components/Details'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));
 
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading HomePage...</div>}>
        <HomePage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading PageNotFound...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: '/new',
    element: (
      <Suspense fallback={<div>Loading ActivityForm...</div>}>
        <ActivityForm />
      </Suspense>
    ),
  },
  {
    path: '/details',
    element: (
      <Suspense fallback={<div>Loading Details...</div>}>
        <Details />
      </Suspense>
    ),
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