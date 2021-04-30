import { users } from '../../users'
import LoginForm from '../forms/LoginForm'

const ModalSign = (props) => {
  const {isLogged , setIsLogged , openLogin , setOpenLogin , setUser} = props
  

  const handleClick = (e) => {
    e.preventDefault()
    setIsLogged(!isLogged)
    setUser(users[0])
    setOpenLogin(false)
 
  }

  if(openLogin){
    return(
      <div className="modal d-block bg-white ">
        <h2 className="text-dark">ModalSign Open </h2>
        <LoginForm  setOpenLogin={setOpenLogin}/>  
        <button className="btn btn-info" onClick={handleClick}>Sign up</button>
      </div>
    )
  }else return null
}
export default ModalSign