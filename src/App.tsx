import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AviaPage from './pages/avia/avia';
import AviaInfoPage from './pages/avia-info/avia-info';
import { IAviaForm } from './models/IAviaForm';

export const aviaFormData: IAviaForm = {
  from: '',
  to: '',
  there: '',
  back: '',
}

export const AviaFormContext = React.createContext<IAviaForm>(aviaFormData)

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
    <AviaFormContext.Provider value={aviaFormData}>
      <RouterProvider router={router} />
    </AviaFormContext.Provider>

  )
}

export default App
