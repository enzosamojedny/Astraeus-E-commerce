import React from 'react'
import './Checkout.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

function Checkout({ sendOrder }) {

  return (
    <div className='div-container'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        className='box'
        noValidate
        autoComplete="off"
      >
        <Typography variant='h2' style={{ textAlign: 'center' }}>CHECKOUT</Typography>
        <TextField id="standard-basic" label="Email" variant="standard" className='form' />
        <TextField id="standard-basic" label="Full name" variant="standard" className='form' />
        <TextField id="standard-basic" label="Address" variant="standard" className='form' />
        <TextField id="standard-basic" label="Country" variant="standard" className='form' />
        <TextField id="standard-basic" label="Credit Card Number" variant="standard" className='form' />
        <Button variant="outlined"
          size="small"
          style={{
            color: "#000000",
            borderColor: "#172738",
            backgroundColor: "#E6E6FA",
            fontWeight: 600,
          }} onClick={sendOrder}>BUY NOW</Button>
      </Box>

    </div>
  )
}

export default Checkout