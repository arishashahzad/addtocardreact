import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import Contact from '../pages/contact'
import Error from '../pages/error'
import Home from '../pages/home'
import Products from '../pages/products'
import ViewProduct from '../pages/viewProduct'

const Routingcomp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products/:id' element={<ViewProduct />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Routingcomp