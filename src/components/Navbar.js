import React from 'react'
import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store';

const Navbar = () => {
  return (
    <>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <StoreIcon fontSize='large'/>
            <Typography variant="h6">
              E-commerce
            </Typography>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
