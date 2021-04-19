const Crypto = (props) => {
  const {crypto} = props
  return(
    <div key={crypto.id}>
      <h2>{crypto.name}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" style ={{'width':800+'px','height':200+'px'}}>
        <polyline points="0 0 ,0 200, 800 200,800 0" fill="none" stroke="black"/>
        <polyline points={`0 ${100+Number(crypto.percent_change_7d)},700 ${100+Number(crypto.percent_change_24h)},800 ${100 + Math.abs(crypto.percent_change_1h)}`} fill="none" stroke="green"/>
      </svg>
    </div>
  )
}
export default Crypto