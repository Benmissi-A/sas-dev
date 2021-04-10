const MemberBoard = (props) => {
  const { crypto } = props
  return (
    <>
      <h2 className="text-center display-2 my-3 p-1 bg-secondary text-light">Member session</h2>
      <ul>
        {crypto.data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  )
}

export default MemberBoard