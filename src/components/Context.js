import React, { useState, useEffect } from "react";
import axios from "axios";
import PublicBoard from "./PublicBoard"
import MemberBoard from "./MemberBoard"

const Context = () => {

  const [crypto, setCrypto] = useState({ data: [] })
  const [isLogged, setIsLogged] = useState(false)

  //setIsLogged(!isLogged)

  useEffect(async () => {
    const result = await axios(
      `https://api.coinlore.net/api/tickers/`,
    );
    setCrypto(result.data)
  })

  //console.log(crypto)

  return (
    <>
      {isLogged ? <MemberBoard crypto={crypto} /> : <PublicBoard crypto={crypto} />}
    </>
  )
}

export default Context