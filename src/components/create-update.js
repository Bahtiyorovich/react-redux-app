import { Input, TextArea } from "../UI"
import { useSelector } from "react-redux"

const CreateUpdate = (props) => {

  const { title, setTitle, description, setDescription, body, setBody, formSubmit } = props
  const {isLoading} = useSelector(state => state.article)

  return (
    <form onSubmit={formSubmit}> 
      <Input
        type={'text'}
        idText={'floatingInput'}
        labelText={'Title'}
        state={title}
        setState={setTitle}
      />
      <TextArea
        type={'text'}
        idText={'floatingTextarea2'}
        label={'Description'}
        state={description}
        setState={setDescription}
      />
      <TextArea
        type={'text'}
        idText={'floatingTextarea2'}
        label={'Body Description'}
        state={body}
        height={'250px'}
        setState={setBody}
      />
      <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Create'}
      </button>
    </form>
  )
}

export default CreateUpdate