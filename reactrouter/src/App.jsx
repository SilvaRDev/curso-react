import './App.css'

// 1 - Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <h1>React Router</h1>
      {/* 2 - Links com React Router */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 7 - No match routes (pg 404) */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
