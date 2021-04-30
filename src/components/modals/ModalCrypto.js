import { buy, sell } from '../../utils'
import BuyForm from '../forms/BuyForm'
const ModalCrypto = (props) => {
  const { filter, openCrypto, setOpenCrypto ,user} = props

  const handleClick = (e) => {
    e.preventDefault()
    setOpenCrypto(false)
  }
  const handleBuy= () =>{
    buy(user)
  }
    const handleSell= () =>{
    sell(user)
  }

  if (openCrypto) {
    return (
      <div className="modal d-block bg-white ">
        <h2 className="text-dark">ModalCrypto Open </h2>
        <BuyForm />
        <div key={filter.id} className="border border-secondary border rounded col-6 m-auto mb-3">
          <h2>{`${filter.id} - ${filter.name} Rank : ${filter.rank}`}</h2>
        </div>
        <button onClick={handleBuy}>Buy</button>
        <button onClick={handleSell}>Sell</button>
        <button className="btn btn-info" onClick={handleClick}>close ModalCrypto</button>
      </div>
    )
  } else return null
}
export default ModalCrypto