import '../styles/Login.css';

function Login () {
  return (
    <div className='login__page'>
    <div className="login__contnaire">
      <form>
        <input placeholder="Username" type="text" required />
        <input placeholder="Password" type="password" required />
        <button type="button">LOG IN</button>
      </form>
    </div>
    </div>
  );
}

export default Login;