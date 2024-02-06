import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ categories, addEntry }) => {
    const params = useParams()
    const [entry, setEntry] = useState('')

    function createEntry(e) {
      e.preventDefault()
      //create a new entry
      //1. create a entry object with from user input
      addEntry(params.cat_id, entry)
      //3. clear existing input
      setEntry('')
    }

    return (
    <>
      <h3>New entry in category {categories[params.cat_id]}</h3>
      <form className='section' onSubmit={createEntry}>
        <div className="field">
          <label className='label'>Content</label>
          <div className="control">
            <textarea className="textarea" value = {entry} onChange={e => setEntry(e.target.value)} placeholder="Type your journal entry here"></textarea>
          </div>
        </div>
        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>Create Entry</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default NewEntry