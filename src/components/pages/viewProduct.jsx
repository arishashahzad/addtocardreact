import React, { useContext, useEffect } from 'react'
import { Context } from '../contextapi/contextapi'
import { useParams } from 'react-router-dom'
import SingleProductPage from './singleProductPage'
import { useState } from 'react'
const ViewProduct = () => {
    const params = useParams()
    const { apiData } = useContext(Context)
    const [eachProduct, seteachProduct] = useState(null)
    useEffect(() => {
        console.log("asdsadsa", apiData)
        if (apiData) {
            let findProduct = apiData.find((data) => {
                return data.id == params.id
            })
            seteachProduct(findProduct)
        }

    }, [])

    return (
        <>
            {
                apiData && eachProduct ? <SingleProductPage productImage={eachProduct.thumbnail} productPrice={eachProduct.price} productTitle={eachProduct.title} productRating={eachProduct.rating} productDescription={eachProduct.description} images={eachProduct.images}productBrand={eachProduct.brand}productStock={eachProduct.stock}productCategory={eachProduct.category}/> 
                
                
                
                : <h1>Loading...</h1>
            }
        </>
    )
}

export default ViewProduct