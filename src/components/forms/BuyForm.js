const BuyForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('buy')
  }
  return<form className="text-dark"  onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="customRange1" className="form-label">crypto range range</label>
            <input type="range" className="form-range" id="customRange1"></input>
          </div>
          <button type="submit" className="btn btn-primary">confirm</button>
      
        </form>
}
export default BuyForm