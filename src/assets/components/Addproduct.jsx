import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Addproduct = ({ product={}}) => {
    
        const [page, setPage] = useState('Home');
        const [count, setCount] = useState(0);
        const [form, setForm] = useState({
          productname: product.productName || '',
          productDescription: product.productDescription|| '',
          prodctPrice: product.productPrice || '',
          productCategory: product.productCategory || '' // Fix spelling here
        });
      
        function valueAdd() {
          console.log(form);
          // setCount(count + 1);
        }
      
        function valueCap(e) {
          // console.log(e);
          setForm({ ...form, [e.target.name]: e.target.value });
        }
      
        function valueAdd() {
              console.log(form);
              //setCount(count + 1);
            }
          
            function valueCap(e) {
              // console.log(e);
              setForm({ ...form, [e.target.name]: e.target.value });
            }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          name="productName"
          value={form.productName}
          onChange={valueCap}

        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="Product Description"
          name="productDescription"
          value={form.productDescription}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="Price"
          name="productPrice"
          value={form.productPrice}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="Category"
          name="productCategory"
          value={form.productCategory}
          onChange={valueCap}
        />
        </div>
      <div>
        <Button variant="contained" onClick={valueAdd}>Submit</Button>
        <br />
        </div>
        </Box>
  );
};

export default Addproduct;