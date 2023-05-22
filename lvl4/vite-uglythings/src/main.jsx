import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThingsProvider } from './ThingsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThingsProvider>
      <App />
    </ThingsProvider>

  </React.StrictMode>,
)
