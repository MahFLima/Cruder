import React, { useState } from 'react';

import { collection, addDoc } from "firebase/firestore";

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Header } from '../components/Header';
import { db } from '../services/firebaseConfig';


export const Post: React.FC = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [urlImage, setUrlImage] = useState("")

  async function addProduct(e: Event){
    e.preventDefault()
    try{
      const docRef = await addDoc(collection(db, "products"), { 
        title,
        description,
        value,
        quantity,
        urlImage
      })
      alert('Deu certo')
      navigate('/feed')
    }catch(e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <Header />
      <main className='flex justify-center mt-8 '>

        <form onSubmit={() => {addProduct}} className="flex flex-col gap-4 px-10 py-6 bg-slate-600 rounded items-center">

          <strong className="text-3xl text-center mb-6 block">Adicionar produto</strong>

          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='title'>Title:</label>
            <input 
              className='px-6 py-2 rounded text-black' 
              type="text" id="title" 
              required 
              max={40}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='description'>Description:</label>
            <input 
              className='px-6 py-2 rounded text-black' 
              type="text" 
              id="description" 
              required 
              max={40}
              onChange={(e) => {setDescription(e.target.value)}} 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='value'>Value:</label>
            <input 
              className='px-6 py-2 rounded text-black' 
              id="value" 
              required 
              type="number" 
              onChange={(e) => {setValue(parseFloat(e.target.value))}}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='quantity'>Quantity:</label>
            <input 
              className='px-6 py-2 rounded text-black' 
              id="quantity" 
              required 
              type="number"
              onChange={(e) => {setQuantity(parseFloat(e.target.value))}}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='urlImage'>URL Image:</label>
            <input 
              className='px-6 py-2 rounded text-black' 
              id="urlImage" 
              required 
              type="text"
              onChange={(e) => {setUrlImage(e.target.value)}}
            />
          </div>

          <button className='px-6 py-2 rounded bg-green-500 w-28 hover:opacity-70'>Submit</button>
        </form>
      </main>
    </div>
  );
}

