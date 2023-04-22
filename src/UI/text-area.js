
const TextArea = ({label,idText, state, setState, height="100px"}) => {
    return (
        <div className="form-floating mb-2">
            <textarea 
                className="form-control" 
                placeholder={label} 
                value={state}
                onChange={e => setState(e.target.value)}
                id={idText} 
                style={{height: height}}
            ></textarea>
            <label htmlFor={idText}>{label}</label>
        </div>
    )
}

export default TextArea