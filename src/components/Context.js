import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board"

const Context = () => {

  const [crypto, setCrypto] = useState({ data: [] })
  const [isLogged, setIsLogged] = useState(true)

  //setIsLogged(true)

  useEffect(async () => {
    const result = await axios(
      `https://api.coinlore.net/api/tickers/`,
    );
    setCrypto(result.data)
  })

  //console.log(crypto)

  return (
    <>
      <Board crypto={crypto} isLogged={isLogged} />
    </>
  )
}

export default Context