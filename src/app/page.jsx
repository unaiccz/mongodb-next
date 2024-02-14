import React from 'react'
import axios from 'axios';
import Form from '@/components/Form';

async function LoaProducts(){
  const response = await axios.get('http://localhost:3000/api/tasks');
  const products = response.data;
  return products;
}

async function page() {
const products = await LoaProducts();
  return (
    <div className='mx-4'>
      <h1 className="text-4xl mb-4">Productos</h1>
      <Form className="float-left"/>
      <div className="grid grid-cols-3 gap-4 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-400 p-4 rounded-md">
            <h3>Name: {product.name}</h3>
            <p>Price: {product.price}</p>
            <p> Description: {product.description}</p>
          </div>
        ))}
    </div>
    </div>
  )
}

export default page