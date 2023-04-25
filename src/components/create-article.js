import { useState } from "react"
import { CreateUpdate } from "./"
import ArticleService from "../service/article"
import { useDispatch} from "react-redux"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"
import { useNavigate } from "react-router-dom"
const CreateArticle = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault()
    dispatch(postArticleStart())
    const article = { title, description, body }
    try {
      await ArticleService.postArticle(article)
      dispatch(postArticleSuccess())
      navigate('/')
    } catch (error) {
      dispatch(postArticleFailure(error.message))
    }
  }

  const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }

  return (
    <div className="text-center">
      <h2 className="fs-2">Create Article</h2>
      <div className="w-75 mx-auto">
        <CreateUpdate {...formProps} />
      </div>
    </div>
  )
}

export default CreateArticle