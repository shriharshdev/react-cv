import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BasicDetails from './BasicDetails.jsx'
import Experience from './Experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className="mainHeading">CV Builder</h1>
    <BasicDetails/>
    <Experience/>
  </React.StrictMode>,
)
