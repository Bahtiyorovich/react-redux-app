
const Button = ({name, method, disabled}) => {
  return (
    <button className="w-100 btn btn-lg btn-primary mt-4" type="submit" onClick={method} disabled={disabled}>{name}</button>
  )
}

export default Button