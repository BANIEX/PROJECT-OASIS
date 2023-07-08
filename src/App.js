import React from 'react'
import './App.css'
import { Activity, Footer, Header, Mission, Nav, Partner } from './component/Index'

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Header />
      <Mission />
      <Activity />
      <Partner />
      <Footer />

    </div>
  )
}

export default App