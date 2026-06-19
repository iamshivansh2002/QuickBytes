import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider, Navigate, useOutletContext } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import '../index.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';



// Gate: only render the page if the user is logged in, otherwise send to /login
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useOutletContext();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
};

const AppLayout = () => {
  // Read persisted auth so a page refresh keeps the user logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true'
  );
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');

  return (
    <Provider store={store}>
      <div className="main-container">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setEmail={setEmail}
          email={email}
        />
        <div className="page-content">
          <Outlet context={{ isLoggedIn, setIsLoggedIn, setEmail }} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <ProtectedRoute><Body /></ProtectedRoute> },
      { path: '/about', element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: '/contact', element: <ProtectedRoute><Contact /></ProtectedRoute> },
      { path: '/restaurant/:resId', element: <ProtectedRoute><RestaurantMenu /></ProtectedRoute> },
      { path: '/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
