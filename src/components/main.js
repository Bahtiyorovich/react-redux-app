import { useSelector } from "react-redux"
import { Loader} from './../UI';
import { useNavigate } from "react-router-dom";

const Main = () => {
  
  const {articles, isLoading} = useSelector(state => state.article)
  const navigate = useNavigate()

  return (
    <div>
     { isLoading && <Loader/>}
      <div className="album py-5">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map(item => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>

                  <div className="card-body">
                    <p className="card-text fw-bold m-1">{item.title}</p>
                    <p className="card-text ">{item.description}</p>
                  </div>
                  <div className="d-flex card-footer justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-success" onClick={() => navigate(`/article/${item.slug}`)}>View</button>
                      <button type="button" className="btn btn-sm btn-outline-warning">Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger">Delite</button>

                    </div>
                    <small className="text-muted text-capitalize">{item.author.username}</small>
                  </div>
                </div>
              </div>

            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main