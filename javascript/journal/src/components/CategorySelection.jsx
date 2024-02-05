import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = () => {
    const [categories, setCategories] = useState(['Food', 'Gaming', 'Coding', 'Other'])
  return (
    <>
        <h3>Please select a category:</h3>
        <ul>
            {
                categories.map((category, index) => (
                    <li key={index} >
                        <Link to={`/entry/new/${index}`}>{category}</Link>
                    </li>
                ))
            }
        </ul>
    </>
    
  )
}

export default CategorySelection