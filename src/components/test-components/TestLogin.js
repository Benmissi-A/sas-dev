// component temporaire de test avec utilisateurs
//import Button from '../Button'
import ModalSign from '../modals/ModalSign'
const TestLogin = (props) => {
const {isLogged , setIsLogged , openLogin , setOpenLogin} = props
  const handleClick = (e) => {
    e.preventDefault()
    setIsLogged(!isLogged)

  }
  //<Button type={"button"} value={isLogged ? 'Logout' : 'Login'} btnStyle={ "btn btn-info my-3"} onClick={handleClick}/> 
  return(
    <>
         
        <button className="btn btn-info" onClick={handleClick}>{isLogged ? 'Logout' : 'Login'}</button>
        <ModalSign openLogin={openLogin} setOpenLogin={setOpenLogin} isLogged={isLogged} setIsLogged={setIsLogged}/>

    </>
  )
}
export default TestLogin