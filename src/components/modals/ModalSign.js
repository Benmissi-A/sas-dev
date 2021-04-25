const ModalSign = (props) => {
  const {isLogged , setIsLogged , openLogin , setOpenLogin} = props
  

  const handleClick = (e) => {
    e.preventDefault()
    setIsLogged(!isLogged)
    setOpenLogin(false)
  }

  if(openLogin){
    return(
      <div className="modal d-block bg-white ">
        <h2 className="text-dark">ModalSign Open </h2>
        <button className="btn btn-info" onClick={handleClick}>Sign up</button>
      </div>
    )
  }else return null
}
export default ModalSign