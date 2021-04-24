// component temporaire de test avec utilisateurs
//import Button from '../Button'
import ModalSign from '../modals/ModalSign'

const TestLogin = (props) => {
const {isLogged , setIsLogged , openLogin , setOpenLogin} = props

  const handleClickOpenModal = () => {
    !isLogged ?  setOpenLogin(true) : setIsLogged(false)
    console.log(isLogged)
  }

  return(
    <>
         
        <button className="btn btn-info" onClick={handleClickOpenModal}>{isLogged ? 'Logout' : 'Login'}</button>
        <ModalSign openLogin={openLogin} setOpenLogin={setOpenLogin} isLogged={isLogged} setIsLogged={setIsLogged}/>

    </>
  )
}
export default TestLogin