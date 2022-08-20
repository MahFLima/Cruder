import axios from "axios"
import { DotsThreeVertical } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom"

export type Props = {
  title: string,
  description: string,
  value: number,
  quantity: number
  urlImage: string
}

export const Card: React.FC<Props> = ({ title, description, value, quantity, urlImage }) => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col w-1/3 px-8 py-6 bg-slate-600'>
      <header className="flex justify-between items-center border-b pb-4">
        <strong className='text-2xl'>{title}</strong>
        <button><DotsThreeVertical size={32} /></button>
      </header>
      <div className='flex justify-between'>
        <img className='w-56 h-56 object-cover' src={urlImage} />
        <div>
          <p className='text-base pt-4 text-gray-400'>
            {description}
          </p>
          <p className='text-base pt-4 text-gray-400'>
            ${value}
          </p>
          <p className='text-base pt-4 text-gray-400'>
            Quantidade: {quantity}
          </p>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <button className="hover:opacity-70 rounded-md px-4 py-2 bg-blue-700">Edit</button>
        <button className="hover:opacity-70 rounded-md px-4 py-2 bg-green-700">Read More</button>
        <button className="hover:opacity-70 rounded-md px-4 py-2 bg-red-700">Delete</button>
      </div>
    </div>
  )
}