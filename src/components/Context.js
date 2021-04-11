import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board"

const Context = () => {

  const [crypto, setCrypto] = useState({ data: [] })
  const [isLogged, setIsLogged] = useState(true)
  const handleClick = () => {
    setIsLogged(!isLogged)
  }


  useEffect(async () => {
    const result = await axios(
      `https://api.coinlore.net/api/tickers/`,
    );
    setCrypto(result.data)
  })

  //console.log(crypto)

  return (
    <>
        <button onClick={handleClick}>{isLogged ? 'Login' : 'Logout'}</button>
      <Board crypto={crypto} isLogged={isLogged} />
    </>
  )
}

export default Context