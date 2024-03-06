import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './routes/scrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename="/">
    <ScrollToTop />
    <App />
  </HashRouter>
)
