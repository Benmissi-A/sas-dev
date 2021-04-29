const Button = (props) => {
   const {value , btnStyle , type , handleClick} = props
  return(
    <button type={type} className={btnStyle} onClick={handleClick}>{value}</button>
  )
}
export default Button