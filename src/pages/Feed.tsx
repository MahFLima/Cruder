import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Props } from '../components/Card';
import { HeaderMain } from '../components/HeaderMain';
import { SignOut } from 'phosphor-react';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, DocumentData, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

export function Feed(){
  const [products, setProducts] = useState([])
  const auth = getAuth()
  const navigate = useNavigate()

  async function listProducts() {
    const unsub = await onSnapshot(collection(db, "products"), (snapshot) => {
      let list = []
      snapshot.docs.forEach((doc) => {
        list.push({...doc.data()})
      })
      setProducts(list)
      console.log(products)
    })
  }

  useEffect(() => {
    listProducts()
  }, [])


  function handleLogout() {
    signOut(auth)
    navigate("/")
  }

  return (
    <div className='flex flex-col relative'>
      <button className="absolute right-4 top-8" onClick={handleLogout}><SignOut size={32} /></button>
      <HeaderMain />
      <main className='flex flex-col justify-center mt-10'>
        <div className='flex flex-col items-center gap-6'>
          {
            products.map((item) => {
              return(
                <Card 
                  key={item.id} 
                  title={item.title} 
                  description={item.description} 
                  value={item.value}
                  quantity={item.quantity}
                  urlImage={item.urlImage}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
