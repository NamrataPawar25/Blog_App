import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'
import UpdateBlog from './pages/UpdateBlog'
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/:ID' element={<BlogDetails />}></Route>
          <Route path='/create' element={<AddBlog />}></Route>
          <Route path='/update/:ID' element={<UpdateBlog />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
