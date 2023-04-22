import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import ArticleService from './../service/article';
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } from "../slice/article";
import moment from "moment/moment";
import Loader from './../UI/loader';

const ArticleDetail = () => {

  const { slug } = useParams()
  const dispatch = useDispatch()

  const {articleDetail, isLoading} = useSelector(state => state.article)

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        dispatch(getArticleDetailSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailFailure())
      }
      // return response
    }
    getArticleDetail()
  }, [slug])

  return ( isLoading ? <Loader/> 
  : articleDetail !== null && (
      <div>
        <div className="p-5 mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
            <p className="col-md-8 fs-4">{articleDetail.description}</p>
            <div classNameName="d-flex gap-3">
              <p classNameName="text-muted"><span classNameName="fw-bold me-2">Created At:</span>{moment(articleDetail.createdAt).format('DD, MMM, YYYY ')}</p>
            </div>
            <div className="card  mb-3 w-50">
              <div className="row g-0">
                <div className="col-md-8 p-3">
                  <div className="card-body">
                    <h5 className="card-title">{articleDetail.author.username}</h5>
                    <p className="card-text">{articleDetail.author.bio}</p>
                    <p className="card-text text-muted"><small className="fw-bold me-2">Update At: </small>{moment(articleDetail.author.updateAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex bg-secondary text-white text-capitalize rounded-end align-items-center justify-content-center">{articleDetail.author.username}</div>
              </div>
            </div>
            <div>{articleDetail.body}</div>
  
          </div>
        </div>
      </div>
    )
  ) 
}

export default ArticleDetail
