import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Edit } from './pages/Edit'
import { Feed } from './pages/Feed'
import { Post } from './pages/Post'
import { ReadMore } from "./pages/ReadMore";
import { SignIn } from "./pages/SignIn";
import { auth } from "./services/firebaseConfig";

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsAuthenticated(true)

      } else {
        setIsAuthenticated(false)
      }
    });
  }, [auth])

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {isAuthenticated ? (
        <>
          <Route path="/feed" element={<Feed />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/readmore/:id" element={<ReadMore />} />
        </>
      ) :
        <></>
      }

      <Route path="*" element={<h1>Não encontrado</h1>} />
    </Routes>
  )
}