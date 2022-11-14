import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AviaPage from './pages/avia/avia';
import AviaInfoPage from './pages/avia-info';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='avia' element={<AviaPage />} />
      <Route path='avia/info' element={<AviaInfoPage />} />\
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
