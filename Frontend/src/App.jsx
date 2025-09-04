import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'
import Notepage from './pages/Notepage'
// import toast from 'react-hot-toast'
const App = () => {
  return (
    <div data-theme='lemonade'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/details/:id" element={<Notepage />} />
      </Routes>
    </div>
  )
}

export default App
