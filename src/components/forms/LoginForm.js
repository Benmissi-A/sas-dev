// formulaire de login , encore en test
const LoginForm = ({setOpenLogin}) => {
 

    const handleSubmit = (e) => {
      console.log('ok')
      e.preventDefault()
      setOpenLogin(false)
 
  }
  return <form className="text-dark"  onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email-adress" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email-adress" aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" aria-describedby="password"></input>
          </div>
           <button type="submit" className="btn btn-primary">submit</button>
      
        </form>
}
export default LoginForm