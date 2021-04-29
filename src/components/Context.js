import React, {useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board"
import ModalCrypto from './modals/ModalCrypto'


const Context = (props) => {
  const {isLogged, openCrypto , setOpenCrypto} = props

  const [crypto, setCrypto] = useState({ data: [] })
  const [cryptoId , setCryptoId] = useState('')

  const filter = crypto.data.filter( el =>  el.id === cryptoId)
/* Fonctin du debut qui etatait efficace mais fesait un warning */
  // useEffect(
    
  //   async () => {
  //   const result = await axios(
  //     `https://api.coinlore.net/api/tickers/`,
  //   );
  //   setCrypto(result.data)
  // },[])

  
/* Corrigé par la console .... a tester */
  useEffect(() => {
  async function fetchData() {
     const result = await axios(
      `https://api.coinlore.net/api/tickers/`,
    );
    setCrypto(result.data)
  }
  fetchData();
}, []);


  return (
    <>
      <Board crypto={crypto} isLogged={isLogged} openCrypto={openCrypto} setOpenCrypto={setOpenCrypto} setCryptoId={setCryptoId}/>
       <ModalCrypto 
        openCrypto={openCrypto}  
        setOpenCrypto={setOpenCrypto}
        filter = {filter[0]}
        />
    </>
  )
}

export default Context