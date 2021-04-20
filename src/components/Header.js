import TestLogin from './test-components/TestLogin' // temporaire


const Header = (props) => {
  const {isLogged , setIsLogged} = props
  
  return (
    <header className="p-5 bg-dark text-center text-light mb-3">
      <h1 className="display-1">S.A.S.</h1>
      <TestLogin isLogged={isLogged} setIsLogged={setIsLogged}/>
    </header>
  )
}

export default Header