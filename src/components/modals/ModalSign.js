const ModalSign = (props) => {
  const {isLogged , setIsLogged , openLogin , setOpenLogin} = props
  if(openLogin){
    return(
      <div className="modal">
        <h2>Modal Open </h2>
      </div>
    )
  }else return null
}
export default ModalSign