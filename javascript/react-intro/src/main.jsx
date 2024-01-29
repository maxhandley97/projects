import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// to create component, pascal case in react


// saying to react, whatever passed is root element, when any react compents
// are rendered, should be children
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
