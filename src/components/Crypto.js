import Button from './Button'

const Crypto = (props) => {
  const {crypto , setOpenCrypto , setCryptoId} = props

  const handleClickModalCrypto = (e) => {  
    e.preventDefault()
    setCryptoId(crypto.id)
    setOpenCrypto(true)
  }
  return(
    <div key={crypto.id} className="border border-secondary border rounded col-6 m-auto mb-3">
      <h2>{`${crypto.name} - ${crypto.name} Rank : ${crypto.rank}`}</h2>
      <p>{`Price: ${crypto.price_usd} USD / ${crypto.price_btc} BTC`}</p>
      <p>{`Change: 7d: ${crypto.percent_change_7d}% 24h: ${crypto.percent_change_24h}% 1h: ${crypto.percent_change_1h}%`}</p>
   
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" style ={{'width':800+'px','height':200+'px'}}>
        <polyline points="0 0 ,0 200, 800 200,800 0" fill="none" stroke="black"/>
        <polyline points={`0 ${100+Number(crypto.percent_change_7d)},700 ${100+Number(crypto.percent_change_24h)},800 ${100 + Math.abs(crypto.percent_change_1h)}`} fill="none" stroke="green"/>
      </svg>
     
      <p>{`Market cap: ${crypto.market_cap_usd} USD`}</p>
      <p>{`Volume 24: ${crypto.volume24} USD`}</p>
      <p>{`Volume 24a: ${crypto.volume24a} USD`}</p>
      <p>{`Csupply: ${crypto.csupply} USD`}</p>
      <p>{`Tsupply: ${crypto.tsupply} USD`}</p>
      <p>{`Msupply: ${crypto.msupply} USD`}</p>
      <Button type={"button"} value={'Buy'} btnStyle={ "btn btn-primary my-3"} handleClick={handleClickModalCrypto}/>
    </div>
  ) 
}
export default Crypto