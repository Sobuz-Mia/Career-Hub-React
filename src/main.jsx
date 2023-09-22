import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blogs from './components/Blogs/Blogs'
import JobDetails from './components/JobDetails/JobDetails'

const CreateRouter = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/appliedJob',
        element:<AppliedJobs/>,
        loader:()=>fetch(`/data/jobs.json`)
      },
      {
        path:'blog',
        element:<Blogs/>
      },
      {
        path:'/job/:id',
        element:<JobDetails/>,
        loader:()=>fetch(`/data/jobs.json`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={CreateRouter}></RouterProvider>
  </React.StrictMode>,
)
