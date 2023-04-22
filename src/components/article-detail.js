import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import ArticleService from './../service/article';
import { useDispatch } from "react-redux";
import { getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } from "../slice/article";

const ArticleDetail = () => {

    const {slug} = useParams()
    const dispatch = useDispatch(state => state.article)
    
    useEffect(() => {
      const getArticleDetail = async () => {
        dispatch(getArticleDetailStart())
        try {
          const response = await ArticleService.getArticleDetail(slug)
          dispatch(getArticleDetailSuccess(response.article))
          } catch(error){
            dispatch(getArticleDetailFailure())
          }
          // return response
        }
      getArticleDetail()
    },[slug])

  return (
    <div>
        {slug}
    </div>
  )
}

export default ArticleDetail
