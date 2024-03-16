import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import Account from './pages/Account';
import Apartments from './pages/Apartments';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Users from './pages/Users';

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'bookings',
        element: <Bookings />,
      },
      {
        path: 'cabins',
        element: <Apartments />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
