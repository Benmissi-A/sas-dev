import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Context from './components/Context'
import {useState} from 'react'

function App() {
    const [isLogged, setIsLogged] = useState(false)
  return (
    <div className="App">
      <Header setIsLogged={setIsLogged} isLogged={isLogged}/>
      <Context isLogged={isLogged}/>
      <Footer />
    </div>
  );
}

export default App;
