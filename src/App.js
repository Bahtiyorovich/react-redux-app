import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ArticleDetail, CreateArticle, EditArticle, Login, Main, Navbar, Register } from "./components"
import  {getItem } from "./helpers/persistance-storage"
import { signUserSuccess } from "./slice/auth"
import AuthService from "./service/auth"

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

  
  useEffect(() => { 
    const token = getItem('token')
    if(token){
      getUser()
    }

  }, [])

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/article/:slug" element={<ArticleDetail/>}/>
            <Route path="/create-article" element={<CreateArticle/>}/>
            <Route path="/edit-article/:slug" element={<EditArticle/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App