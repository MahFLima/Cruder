import React from 'react';
import {CaretLeft} from 'phosphor-react'
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-start px-8 py-6 bg-slate-500 text-white'>
      <button onClick={() => navigate(-1)}><CaretLeft size={32}/></button>
    </div>
  );
}
