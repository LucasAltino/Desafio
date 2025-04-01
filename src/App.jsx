import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Atendimento from './pages/Atendimento'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/atendimento' element={<Atendimento/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
