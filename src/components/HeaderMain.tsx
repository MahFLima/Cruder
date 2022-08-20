import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderMain: React.FC = () => {
  const navigate = useNavigate()
  return (
    <header className='flex justify-between items-center px-20 py-6 bg-slate-500 '>
      <strong className="text-2xl text-white">Cruder</strong>
      <button onClick={() => {navigate('/post')}} 
        className="px-8 py-3 bg-purple-900 text-white text-lg rounded hover:opacity-70">
          new post
      </button>
    </header>
  );
}

