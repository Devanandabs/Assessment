import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Navproduct = () => {
  return (
    
       <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Product App
        </Typography>
        <Link to={'/'}><Button style={{color:'white'}}>Viewproduct</Button></Link>
        <Link to={'/add'}><Button style={{color:'white'}}>Addproduct</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navproduct