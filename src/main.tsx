import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import favicon from './assets/nav icom.png'

const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/png'
faviconLink.href = favicon
document.head.appendChild(faviconLink)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
