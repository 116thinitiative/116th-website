import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style
import HomeScreen from './pages/HomeScreen'
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Publications from './pages/Publications';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './ScrollToTop';
import Events from './pages/Events';

//using react router for navigation
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
    loader: ScrollToTop
  },
  {
    path: "/116th-website/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
    loader: ScrollToTop
  },
  {
    path: "/116th-website/publications",
    element: <Publications />,
    errorElement: <ErrorPage />,
    loader: ScrollToTop
  },
  {
    path: "/116th-website/contact-us",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
    loader: ScrollToTop
  },
  {
    path: "/116th-website/events",
    element: <Events />,
    errorElement: <ErrorPage />,
    loader: ScrollToTop
  }
], {basename: import.meta.env.BASE_URL});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
