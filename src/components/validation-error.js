import { useCallback } from "react"
import { useSelector } from "react-redux"


const ValidationError = () => {

    const {error} = useSelector(state => state.auth)

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(desc => {
            const msg = error[desc].join(', ')
            return `${desc}! - ${msg}`
        })
    }, [error])

  return (
    error !== null && 
        errorMessage().map(err => (
            <div class="alert alert-danger m-1 p-2 text-start " role="alert" key={error}>
                {err}
            </div>
        ))
    )
}

export default ValidationError