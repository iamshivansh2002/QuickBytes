import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import '../index.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';



const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Provider store={store}>
      <div className="main-container">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          email={email}
        />
        <div className="page-content">
          <Outlet context={{ setIsLoggedIn, setEmail }} />
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
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },

      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      { path: '/login', element: <Login /> },
         { path: '/cart', element: <Cart /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
