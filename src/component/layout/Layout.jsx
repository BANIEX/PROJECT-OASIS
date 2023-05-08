import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav, Footer } from '../Index'

const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout