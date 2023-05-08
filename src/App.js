import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, Contact, Layout } from './component/Index'
//import { Activity, Footer, Header, Mission, Nav, Partner } from './component/Index'

function App() {
  return (

    <BrowserRouter>
      <Routes>
       <Route element={<Layout />}>
        <Route path='/' element={ <Home />} />
        <Route path='contact' element={ <Contact />} />
       </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App