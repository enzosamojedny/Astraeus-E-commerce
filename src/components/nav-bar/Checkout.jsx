import React, { useState } from 'react';
import './Checkout.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebase/client';
import SpanningTable from './Table';

function Checkout() {


  const [orderData, setOrderData] = useState({
    email: '',
    fullName: '',
    address: '',
    country: '',
    creditCardNumber: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setOrderData({ ...orderData, [id]: value });
  };

  // const sendOrder = async () => {
  //   const db = app.firestore();

  //   try {
  //     const docRef = await addDoc(collection(db, 'orders'), orderData);
  //     console.log('Order written with ID: ', docRef.id);
  //   } catch (error) {
  //     console.error('Error adding order: ', error);
  //   }
  // };

  return (

    <div className='div-container'>
      <SpanningTable />
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        className='box'
        noValidate
        autoComplete='off'
      >
        <Typography variant='h2' style={{ textAlign: 'center' }}>
          CHECKOUT
        </Typography>
        <TextField
          id='email'
          label='Email'
          variant='standard'
          className='form'
          value={orderData.email}
          onChange={handleChange}
        />
        <TextField
          id='fullName'
          label='Full name'
          variant='standard'
          className='form'
          value={orderData.fullName}
          onChange={handleChange}
        />
        <TextField
          id='address'
          label='Address'
          variant='standard'
          className='form'
          value={orderData.address}
          onChange={handleChange}
        />
        <TextField
          id='country'
          label='Country'
          variant='standard'
          className='form'
          value={orderData.country}
          onChange={handleChange}
        />
        <TextField
          id='creditCardNumber'
          label='Credit Card Number'
          variant='standard'
          className='form'
          value={orderData.creditCardNumber}
          onChange={handleChange}
        />
        <Button
          variant='outlined'
          size='small'
          style={{
            color: '#000000',
            borderColor: '#172738',
            backgroundColor: '#E6E6FA',
            fontWeight: 600,
          }}
        >
          BUY NOW
        </Button>
      </Box>

    </div>
  );
}

export default Checkout;
