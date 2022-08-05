import { Route, Routes } from "react-router-dom";
import { Edit } from './pages/Edit'
import { Feed } from './pages/Feed'
import { Post } from './pages/Post'
import { ReadMore } from "./pages/ReadMore";

export function Router(){
  return(
    <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/readmore/:id" element={<ReadMore/>}/>
        <Route path="*" element={<h1>Não encontrado</h1>}/>
    </Routes>
  )
}