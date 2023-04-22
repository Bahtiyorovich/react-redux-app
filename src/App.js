import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ArticleDetail, Login, Main, Navbar, Register } from "./components"
import { getItem } from "./helpers/persistance-storage"
import { signUserSuccess } from "./slice/auth"
import AuthService from "./service/auth"
import ArticleService from './service/article';
import { getArticleStart, getArticleSuccess } from "./slice/article"

const App = () => {

  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch(error) {
      console.log(error)
    }
  }

  const getArticles = async () => {
    dispatch(getArticleStart())
    try{
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => { 
    const token = getItem('token')
    if(token){
      getUser()
    }

    getArticles()
  },[])

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/article/:slug" element={<ArticleDetail/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App