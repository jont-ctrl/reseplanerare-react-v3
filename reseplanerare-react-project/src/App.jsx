import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details';
import Footer from './components/Footer'; // Ensure this import is correct

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer /> {/* Footer will render at the bottom of every page */}
    </>
  );
}

export default App;
