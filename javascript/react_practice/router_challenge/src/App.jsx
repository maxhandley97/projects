import React from 'react'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Homepage } from './pages/HomePage'
import  Articles  from './pages/Articles';
import { ArticlePage } from './pages/ArticlePage'
import {Navbar} from './components/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="articles" >
            <Route index element={<Articles />} />
            <Route path=":id" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
