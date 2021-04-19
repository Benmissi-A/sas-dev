import React, {useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board"

const Context = (props) => {
  const {isLogged} = props

  const [crypto, setCrypto] = useState({ data: [] })
 

  useEffect(async () => {
    const result = await axios(
      `https://api.coinlore.net/api/tickers/`,
    );
    setCrypto(result.data)
  })

  return (
    <>
      <Board crypto={crypto} isLogged={isLogged} />
    </>
  )
}

export default Context