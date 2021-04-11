const PublicBoard = (props) => {
  const { crypto, isLogged} = props
  return (
    <>
      <h2 className="text-center display-2 my-3 p-1 bg-secondary text-light">{isLogged ? `Member session` : `Public session`}</h2>
      <ul>isLogged
        {crypto.data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  )
}

export default PublicBoard