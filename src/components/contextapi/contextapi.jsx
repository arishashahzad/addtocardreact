import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../reuseable/navbar'
export const Context = createContext()


const Contextapi = ({ Children }) => {
    const [apiData, setApiData] = useState(null)
    ///////////////// CONTEXTAPI LOGIC //////////
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json()
            }).then((data) => {
                setApiData(data.products)
            })
    }, [])


    ///////////////// CONTEXTAPI LOGIC //////////

    return (
        <Context.Provider value={{ apiData }}>
            <Navbar />
            <Children />
        </Context.Provider>

    )
}

export default Contextapi