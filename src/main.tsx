import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding/index.tsx'
import Login from './pages/Login/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />
  },
  {
    path: '/login',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
