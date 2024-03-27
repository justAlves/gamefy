import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding/index.tsx'
import Login from './pages/Login/index.tsx'
import Register from './pages/Register/index.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import Explore from './pages/Explore/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/explore',
    element: <Explore/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
