import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <div style={{ display: "flex", gap: "20px" }}>

                        {/* <Button color="inherit">Login</Button> */}
                        <NavLink style={({ isActive }) => {
                            isActive ? "active" : "deactive"
                        }} to="/">Home</NavLink>
                        <NavLink style={({ isActive }) => {
                            isActive ? "active" : "deactive"
                        }} to="/about">About</NavLink>
                        <NavLink style={({ isActive }) => {
                            isActive ? "active" : "deactive"
                        }} to="/products">Products</NavLink>
                        <NavLink style={({ isActive }) => {
                            isActive ? "active" : "deactive"
                        }} to="/contact">Contact</NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar