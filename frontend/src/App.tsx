import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { Suspense, useState } from 'react';
import Loader from './components/Loader/Loader';
import Menu from './components/Menu/Menu';

import styles from './App.module.css';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setUserAuthenticated(!userAuthenticated);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <div className={styles.root}>
            <Menu auth={handleAuthentication} />
            <Outlet />
          </div>
        }
      >
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <div>first page</div>
            </Suspense>
          }
        />
        <Route
          path='s'
          element={
            <Suspense fallback={<Loader />}>
              <p>second page</p>
            </Suspense>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
