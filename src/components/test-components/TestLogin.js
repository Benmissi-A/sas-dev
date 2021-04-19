// component temporaire de test avec utilisateurs

const TestLogin = (props) => {
const {isLogged , setIsLogged} = props
  const handleClick = (e) => {
    e.preventDefault()
    setIsLogged(!isLogged)

  }
  return(
    <>
       <button className="btn btn-info" onClick={handleClick}>{isLogged ? 'Logout' : 'Login'}</button>
    </>
  )
}
export default TestLogin