import React from 'react'

import Home1 from './page';
import Response from './appopen';
import GenerativeAIComponent from './googleai';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App(){
  const router=createBrowserRouter([
    {path:"/",element:<><Home1/></>},
    {path:"/response",element:<><GenerativeAIComponent/></>},
  ])
  
    return (
     <RouterProvider router={router}/>
      
    
    )
}


export default App;
