import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",    
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element : <About />
      },
      {
        path : "/shop",
        element : <Shop />
      }, 
      {
        path : "/contact",
        element : <Contact />
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
