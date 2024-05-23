import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../contextapi/contextapi'
import CardComp from '../reuseable/cardcomp'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()
    const { apiData } = useContext(Context)
    console.log(apiData)

    const viewproduct = (e) => {
        navigate(`/products/${e.id}`)
    }

    return (
        <Container sx={{ marginTop: 5 }} >
            <Grid container columnSpacing={3} rowSpacing={3}>
                {apiData && apiData.map((data, id) => {
                    return (
                        <Grid key={id} item columnSpacing={5} rowSpacing={4} xs={12} sm={6} md={4} lg={3}>
                            <CardComp cardImage={data.thumbnail} shorDesc={data.description} productName={data.title} productPrice={data.price} viewProductFunc={() => { viewproduct(data) }} rating={data.rating} />
                        </Grid>
                    )
                })}


            </Grid>
        </Container>
    )
}

export default Products