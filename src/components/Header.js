import TestLogin from './test-components/TestLogin' // temporaire


const Header = (props) => {
  const {isLogged , setIsLogged , openLogin , setOpenLogin} = props
  
  
  return (
    <header className="p-5 bg-dark text-center text-light mb-3">
      <h1 className="display-1">S.A.S.</h1>
      <TestLogin isLogged={isLogged} setIsLogged={setIsLogged} openLogin={openLogin} setOpenLogin={setOpenLogin}/>

    </header>
  )
}

export default Header