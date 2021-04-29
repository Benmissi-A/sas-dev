import { Buy } from './utils/Buy'
import { Sell } from './utils/Sell'


const PublicBoard = (props) => {
  const { crypto, isLogged } = props
  return (
    <>
      <h2 className="text-center display-2 my-3 p-1 bg-secondary text-light">{isLogged ? `Logged` : `Public`}</h2>
      <ul>
        {crypto.data.map(el => (
          <li key={el.id}>{el.name}
            <button onClick={<Buy price={el.price_usd} isLogged={isLogged} />}>Buy</button>
            <button onClick={<Sell price={el.price_usd} isLogged={isLogged} />}>Sell</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PublicBoard