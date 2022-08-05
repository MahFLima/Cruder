import React, { useEffect } from 'react';
import axios from 'axios';
import * as yup from "yup"

import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from '../components/Header';

const validationPost = yup.object().shape({
  title: yup.string().required().max(40, 'maximo de 40 caracteres'),
  description: yup.string().required().max(150, 'maximo de 150 caracteres'),
  content: yup.string().required().max(500, 'maximo de 500 caracteres'),
})

export const Edit: React.FC = () => {
  const { id } = useParams()
  const url = "http://localhost:5500/api"
  const navigate = useNavigate()

  const addPost = (data: object) => axios.put(`${url}/${id}`, data)
  .then(() => {
    alert("Deu tudo certo")
    navigate('/')
  })
  .catch((err: Error) => {console.log(err.message)})

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationPost)
  })

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then((response) => {
        reset(response.data)
      })
      .catch((err: Error) => {console.log(err.message)})
  }, [])


  return (
    <div>
      <Header />
      <main className='flex justify-center mt-10 '>
        <form onSubmit={handleSubmit(addPost)} className="flex flex-col gap-4 px-10 py-6 bg-slate-600 rounded items-center">
          <strong className="text-3xl text-center mb-6 block">Editar postagem</strong>
          <div className="flex flex-col gap-2">
            <label className='text-lg' htmlFor='title'>Title:</label>
            <input className='px-6 py-2 rounded text-black' type="text" id="title" required max={40} {...register("title")} />
            {/* <p>{errors.title?.menssage}</p> */}
          </div>
          <div className="flex flex-col gap-3">
            <label className='text-lg' htmlFor='description'>Description:</label>
            <input className='px-6 py-2 rounded text-black' type="text" id="description" required max={150} {...register("description")} />
          </div>
          <div className="flex flex-col gap-3">
            <label className='text-lg' htmlFor='content'>Content:</label>
            <textarea className='px-6 py-2 rounded text-black' id="content" required max={500} {...register("content")} />
          </div>
          <button className='px-6 py-2 rounded bg-green-500 w-28 hover:opacity-70'>Submit</button>
        </form>
      </main>
    </div>
  );
}


