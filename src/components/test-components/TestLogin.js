// component temporaire de test avec utilisateurs
//import Button from '../Button'
import ModalSign from '../modals/ModalSign'


const TestLogin = (props) => {
  const { isLogged, setIsLogged, openLogin, setOpenLogin, setUser } = props

  const handleClickOpenModal = () => {

    if(!isLogged ){setOpenLogin(true) 
    }else{
         setIsLogged(false)
      setUser({})
    }
    console.log(isLogged)
  }

  return (
    <>

      <button className="btn btn-info" onClick={handleClickOpenModal}>{isLogged ? 'Logout' : 'Login'}</button>
      <ModalSign openLogin={openLogin} setOpenLogin={setOpenLogin} isLogged={isLogged} setIsLogged={setIsLogged} setUser={setUser} />

    </>
  )
}
export default TestLogin