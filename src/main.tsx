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

//using react router for navigation
const router = createBrowserRouter([
  {
    path: "/116th-website/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/116th-website/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/116th-website/publications",
    element: <Publications />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
