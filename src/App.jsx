import "./App.css"
import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Router.jsx"  

const App =  () => { 
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  )
}
export default App