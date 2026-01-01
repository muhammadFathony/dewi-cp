import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// App
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
