import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage'));
const ActivityForm = lazy(() => import('./components/ActivityForm'));
const Details = lazy(() => import('./components/Details'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));
const ActivityDetails = lazy(() => import('./components/ActivityDetails'));
const ReseTips = lazy(() => import('./components/ReseTips'));

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
  {
    path: '/details/:activityID',
    element: (
      <Suspense fallback={<div>Loading ActivityDetails...</div>}>
        <ActivityDetails />
      </Suspense>
    ),
  },
  {
    path: '/resetips',
    element: (
      <Suspense fallback={<div>Loading ReseTips...</div>}>
        <ReseTips />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
