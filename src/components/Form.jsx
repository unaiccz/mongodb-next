'use client'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

function Form() {
    const rt = useRouter();
    const [F_data, setF_data] = useState({
        name: "Producto",
        price: 0.00,
        description: "Descripcion"
    });
const onsubmit = async (e) => {
    e.preventDefault();
// use axios
    const res = await axios.post('/api/tasks', F_data);
    console.log(res.data);
Swal.fire({
    icon: 'success',
    title: `Producto ${F_data.name} guardado`,
    showConfirmButton: true,
    timer: 4000
});
rt.refresh();
}
    const handleChange = (e) => {
        setF_data({
            ...F_data,
            [e.target.name]: e.target.value
        });    }
    
  return (
    <div>
        <form className="bg-gray-100 p-4 rounded-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                <input type="text" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripcion</label>
                <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onsubmit}>
                Guardar
            </button>
        </form>
    </div>
  )
}

export default Form
