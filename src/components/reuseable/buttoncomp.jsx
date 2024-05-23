import { Button } from '@mui/material'
import React from 'react'

const Buttoncomp = ({ btnValue, btnVariant, clickEvent, btnSize }) => {
    return (
        <Button size={btnSize} variant={btnVariant} onClick={() => { clickEvent() }}>{btnValue}</Button>
    )
}

export default Buttoncomp