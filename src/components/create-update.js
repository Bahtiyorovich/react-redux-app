import { Input, TextArea, Button } from "../UI"
import { useState } from "react"


const CreateUpdate = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')

  return (
    <div className="w-75 mx-auto">
        <form>
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
          <Button name={'Create'}/>
        </form>
      </div>
  )
}

export default CreateUpdate