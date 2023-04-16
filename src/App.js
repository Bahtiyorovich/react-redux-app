import { Route, Routes } from "react-router-dom"
import { Login, Main, Navbar, Register } from "./components"
import AuthService from "./service/auth"
import { useEffect } from "react"
import { getItem } from "./helpers/persistance-storage"

const App = () => {

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      console.log(response)
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
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App