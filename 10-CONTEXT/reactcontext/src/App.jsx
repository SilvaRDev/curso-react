import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'

/* COMPONENTS */
import Navbar from './components/Navbar'

/* PAGES */
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
