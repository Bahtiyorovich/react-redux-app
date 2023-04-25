import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ArticleService from "../service/article"

const ArticleCard = ({item, getArticles}) => {

    const navigate = useNavigate()
    const {loggedIn, user} = useSelector(state => state.auth)

    const deleteArticle = async (slug) => {
        try {
          await ArticleService.deleteArticle(slug)
          getArticles()
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className="col" key={item.id}>
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
      <div className="card-body">
        <p className="card-text fw-bold m-1">{`${item.title.slice(0,30)}...`}</p>
        <p className="card-text ">{`${item.description.slice(0, 30)} .....`}</p>
      </div>
      <div className="d-flex card-footer justify-content-between align-items-center">
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-success" onClick={() => navigate(`/article/${item.slug}`)}>View</button>
          {loggedIn && user.username === item.author.username && (
            <> 
              <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => navigate(`/edit-article/${item.slug}`)}>Edit</button>
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteArticle(item.slug)}>Delite</button>
            </>
          )}
          

        </div>
        <small className="text-muted text-capitalize">{item.author.username}</small>
      </div>
    </div>
  </div>

  )
}

export default ArticleCard