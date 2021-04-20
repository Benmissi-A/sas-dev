import Button from '../Button'
const LoginForm = () => {
  return (
    <form>
      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" key="exampleInputEmail1" aria-describedby="emailHelp"></input>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" key="exampleInputPassword1"></input>
      </div>
      <Button type ={'submit'} value={'Buy'} btnStyle={ "btn btn-primary my-3"}/>
    </form>    
    )
}
export default LoginForm