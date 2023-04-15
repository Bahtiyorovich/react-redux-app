
const Input = ({type, idText, placeholder, labelText, state, setState}) => {

  return (
    <div className="form-floating mb-2">
        <input 
            type={type} 
            className="form-control" 
            id={idText} 
            placeholder={placeholder}
            value={state}
            onChange={e => setState(e.target.value)}
        />

        <label for={idText}>{labelText}</label>
    </div>
  )
}

export default Input