import React, { useState } from 'react'
import HomePage from './HomePage'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'



const App = () => {
  const [categories] = useState(['Food', 'Gaming', 'Coding', 'Other'])
  const [entries, setEntries] = useState([])

  function addEntry(cat_id, content){
    const NewEntry = {
      category: cat_id,
      content: content,
    }
    //2. store the new entry to entries list
    setEntries([...entries, NewEntry])
  }
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category' element={<CategorySelection categories={categories} />} />
          <Route path='/entry' >
            <Route path='new/:cat_id' element={<NewEntry categories={categories} addEntry={addEntry}/>} />
          </Route>
          <Route path='*' element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App