import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <Router>
      <header>
        <h2 className='headerTitle'>Roto Router</h2>
        <nav style={{margin:10}}>
        <Link to= '/' style={{padding:5}} className='link'>
          Home
        </Link>
        <Link to= '/about' style={{padding:5}} className='link'>
          About
        </Link>
        <Link to= '/services' style={{padding:5}} className='link'>
          Services
        </Link>
        <Link to= '/products' style={{padding:5}} className='link'>
          Products
        </Link>
      </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
    </Router>
  )
}

export default App


// For this exercise you will be making a mock SPA (Single Page Application) for a plumbing company website.
// []Your website must contain a navbar, footer, and a main view section. Your navbar must contain at least 3 `Link` 
// []tags to at least 3 different views (for example `Home`, `About`, and `Services`).
// The goal is to become proficient in using the three basic React-Router components: `Link`,`Routes`, and `Route`.
// Make sure to `npm install react-router-dom` and wrap your `App` component inside `BrowserRouter`: