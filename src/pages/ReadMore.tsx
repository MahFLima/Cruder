import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Props } from '../components/Card';
import { Header } from '../components/Header';

export const ReadMore: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState<Props>()

  useEffect(() => {
    axios.get(`http://localhost:5500/api/${id}`).then((response) => {
      const data = response.data
      setPost(data)
      console.log(data)
    })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <main className='flex flex-col justify-center mt-10'>
        <div className='flex flex-col items-center gap-6'>

          <div key={1} className='flex flex-col w-1/3 px-8 py-6 bg-slate-600'>
            <header className="flex justify-between items-center border-b pb-4">
              <strong className='text-2xl'>{post?.title}</strong>
            </header>
            <p className='text-base pt-4 text-gray-400'>
              {post?.content}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

