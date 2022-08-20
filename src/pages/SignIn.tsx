import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../services/firebaseConfig'

export function SignIn() {
  const [authentication, setAuthentication] = useState(false)
  const [error, setError] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  
  const navigate = useNavigate()

  function handleLogin(){  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/feed")
      })
      .catch((err) => {
        setError(true)
        setAuthentication(false)
      })
  }

  return (
    <div>
      <div className='flex justify-start px-8 py-6 bg-slate-500 text-white'>
      </div>
      <main className="flex justify-center mt-8">

        <div  className="flex flex-col p-6 bg-gray-500 gap-6 w-[500px]">
          <h1 className="text-3xl">Autenticação</h1>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">E-mail</label>
            <input className="text-black" id="email" type="email" onChange={(e) => { setEmail(e.target?.value) }} required/>
          </div>
          <div className="flex flex-col gap-4 ">
            <label htmlFor="password">Senha</label>
            <input className="text-black" id="password" type="password" onChange={(e) => { setPassword(e.target?.value) }} required/>
          </div>
          <button onClick={handleLogin} className="bg-green-600 text-white py-2 w-72">Enter</button>
          {error && <span>Email ou senha incorretos</span>}
        </div>
      </main>
    </div>
  )
}