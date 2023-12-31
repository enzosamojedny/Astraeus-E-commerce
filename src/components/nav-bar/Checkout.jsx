import React, { useEffect, useState } from 'react';
import './Checkout.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import SpanningTable from './Table';
import Swal from 'sweetalert2'

function Checkout() {
  const [savedItems, setSavedItems] = useState([]);
  const [orderData, setOrderData] = useState({
    email: '',
    repeatedEmail: '',
    fullName: '',
    address: '',
    country: '',
    phone: ''
  });
  let ids = [];
  let titles = [];
  let prices = [];
  let counts = [];
  let images = [];
  let totals = [];
  savedItems.forEach(item => {
    ids.push(item.id);
    titles.push(item.title);
    prices.push(item.price);
    counts.push(item.count);
    images.push(item.image);
    totals.push(item.total);
  });
  useEffect(() => {
    setSavedItems(JSON.parse(localStorage.getItem('cart')));
  }, [])
  console.log(savedItems)
  const handleChange = (event) => {
    const { id, value } = event.target;
    setOrderData({ ...orderData, [id]: value });
  };
  const addOrder = async (element) => {
    element.preventDefault();
    try {
      const orderWithItems = { ...orderData, savedItems };
      const docRef = await addDoc(collection(db, "orders"), orderWithItems);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your order was successful!',
        html: `Order number: <b>${docRef.id}</b><br>Products bought: ${titles}`,
        showConfirmButton: true,
        timer: 30000
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (element) {
      console.error("Error adding document: ", element);
    }
  }

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
          id='repeatedEmail'
          label='Repeat email address'
          variant='standard'
          className='form'
          value={orderData.repeatedEmail}
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
          id='phone'
          label='Phone number'
          variant='standard'
          className='form'
          value={orderData.phone}
          onChange={handleChange}
        />
        <Button
          type='button'
          variant='outlined'
          size='small'
          style={{
            color: '#000000',
            borderColor: '#172738',
            backgroundColor: '#E6E6FA',
            fontWeight: 600,
          }}
          onClick={addOrder}
        >
          BUY NOW
        </Button>
      </Box>
    </div>
  );
};

export default Checkout;
