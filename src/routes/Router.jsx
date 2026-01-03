import { createBrowserRouter } from "react-router-dom"
import Layouts from "../layouts"
import Home from "../pages/home"
import Detail from "../pages/details/portofolio"
export const Router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layouts />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/detail", 
        element: <Detail />
      },
    ]
  },
])