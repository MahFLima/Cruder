import axios from "axios"
import { DotsThreeVertical } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom"

export type Props = {
  id: number,
  title: string,
  description: string,
  content: string,
}

export const Card: React.FC<Props> = ({id, title, description, content}) => {
  const navigate = useNavigate()

  function deletePost(){
    axios.delete(`http://localhost:5500/api/${id}`)
    alert('Post deleted successfully')
    window.location.reload()
  }
  return (
    <div className='flex flex-col w-1/3 px-8 py-6 bg-slate-600'>
      <header className="flex justify-between items-center border-b pb-4">
        <strong className='text-2xl'>{title}</strong>
        <button><DotsThreeVertical size={32} /></button>
      </header>
      <p className='text-base pt-4 text-gray-400'>
        {description}
      </p>
      <div className="flex mt-4 justify-between"> 
        <button onClick={() => navigate(`/edit/${id}`)} className="hover:opacity-70 rounded-md px-4 py-2 bg-blue-700">Edit</button>
        <button onClick={() => navigate(`/readmore/${id}`)} className="hover:opacity-70 rounded-md px-4 py-2 bg-green-700">Read More</button>
        <button onClick={deletePost} className="hover:opacity-70 rounded-md px-4 py-2 bg-red-700">Delete</button>
      </div>
    </div>
  )
}