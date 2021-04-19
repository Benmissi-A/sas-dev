const Button = (props) => {
   const {value , btnStyle} = props
  return(
    <button type="button" className={btnStyle}>{value}</button>
  )
}
export default Button