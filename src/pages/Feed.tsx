import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Props } from '../components/Card';
import { HeaderMain } from '../components/HeaderMain';

export const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Props[]>([])

  useEffect(() => {
    axios.get('http://localhost:5500/api').then((response) => {
      const data = response.data
      setPosts(data.posts)
    })
    .catch(error => {console.log(error)})
    
  },[])

  return (
    <div className='flex flex-col'>
      <HeaderMain />
      <main className='flex flex-col justify-center mt-10'>
        <div className='flex flex-col items-center gap-6'>
          {
            posts.map((item) => {
              return(
                <Card 
                  id={item.id} 
                  key={item.id} 
                  title={item.title} 
                  description={item.description} 
                  content={item.content}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
