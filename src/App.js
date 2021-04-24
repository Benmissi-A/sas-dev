import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Context from './components/Context'
import {useState} from 'react'

function App() {
    const [isLogged, setIsLogged] = useState(false)
    const [openLogin , setOpenLogin] = useState(false)
    const [openCrypto , setOpenCrypto] = useState(false)
      
   
  return (
    <div className="App">
      <Header setIsLogged={setIsLogged} isLogged={isLogged} openLogin={openLogin} setOpenLogin={setOpenLogin}/>
      <Context isLogged={isLogged} openCrypto={openCrypto} setOpenCrypto={setOpenCrypto}/>
      <Footer />
    </div>
  );
}

export default App;
