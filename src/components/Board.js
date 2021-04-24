import Crypto from './Crypto'
const PublicBoard = (props) => {
  const { crypto, isLogged} = props
  return (
    <>
      <h2 className="text-center display-2 my-3 p-1 bg-secondary text-light">{isLogged ? `Logged` : `Public`}</h2>
      <ul>
        {crypto.data.map(el => (
          <Crypto key={el.id} crypto = {el}/>
        ))}
      </ul>
    </>
  )
}

export default PublicBoard