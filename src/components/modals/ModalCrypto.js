import { buy, sell } from '../../utils'

const ModalCrypto = (props) => {
  const { filter, openCrypto, setOpenCrypto } = props

  const handleClick = (e) => {
    e.preventDefault()
    setOpenCrypto(false)
  }

  const handleBuy = (user) => {
    buy(user)
  }

  //console.log(name)
  if (openCrypto) {
    return (
      <div className="modal d-block bg-white ">
        <h2 className="text-dark">ModalCrypto Open </h2>

        <div key={filter.id} className="border border-secondary border rounded col-6 m-auto mb-3">
          <h2>{`${filter.id} - ${filter.name} Rank : ${filter.rank}`}</h2>
        </div>
        <button onClick={handleBuy}>Buy</button>
        <button onClick={sell}>Sell</button>
        <button className="btn btn-info" onClick={handleClick}>close ModalCrypto</button>
      </div>
    )
  } else return null
}
export default ModalCrypto