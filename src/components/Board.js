<<<<<<< HEAD
import { Buy } from './utils/Buy'
import { Sell } from './utils/Sell'


const PublicBoard = (props) => {
  const { crypto, isLogged } = props
=======
import Crypto from './Crypto'

const PublicBoard = (props) => {
  const { crypto, isLogged , setOpenCrypto , setCryptoId} = props
  
>>>>>>> 50a04de3eda69babb34e42cf91c02972e0893773
  return (
    <>
      <h2 className="text-center display-2 my-3 p-1 bg-secondary text-light">{isLogged ? `Logged` : `Public`}</h2>
      <ul>
        {crypto.data.map(el => (
<<<<<<< HEAD
        <li key={el.id}>{el.name}
          <button onClick={<Buy price={el.price_usd} isLogged={isLogged} />}>Buy</button>
          <button onClick={<Sell price={el.price_usd} isLogged={isLogged} />}>Sell</button>
        </li>
      ))}
=======
          <Crypto key={el.id} crypto = {el} setOpenCrypto={setOpenCrypto} setCryptoId={setCryptoId}/>
        ))}
>>>>>>> 50a04de3eda69babb34e42cf91c02972e0893773
      </ul>
    </>
  )
}

export default PublicBoard