import { createBrowserRouter } from "react-router-dom"
import Layouts from "../layouts/Index.jsx"
import Home from "../pages/home/Index.jsx"
export const Router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <div>About Page</div> },
      { path: "/contact", element: <div>Contact Page</div> },
    ]
  },
])