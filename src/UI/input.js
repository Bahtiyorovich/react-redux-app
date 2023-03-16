

const Input = ({label, type,id, state, setState}) => {

  return (
    <div className="form-floating mb-2">
        <input 
            type={type} 
            className="form-control" 
            id={id} 
            placeholder={label}
            value={state}
            onChange={e => setState(e.target.value)} 
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input