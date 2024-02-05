import React from 'react'
import HomePage from './HomePage'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category' element={<CategorySelection />} />
          <Route path='/entry' >
            <Route path='new/:cat_id' element={<NewEntry />} />
          </Route>
          <Route path='*' element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App