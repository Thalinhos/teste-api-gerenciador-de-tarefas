import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Choose from './choose-box.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Choose />
    <Footer />
  </React.StrictMode>,
  
)
