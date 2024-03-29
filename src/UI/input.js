
const Input = ({type, idText, labelText, state, setState}) => {

  return (
    <div className="form-floating mb-2 w-100">
        <input 
            type={type} 
            className="form-control"
            id={idText} 
            placeholder={labelText}
            value={state}
            onChange={e => setState(e.target.value)}
        />

        <label htmlFor={idText}>{labelText}</label>
    </div>
  )
}

export default Input