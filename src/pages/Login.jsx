import Navbar from '../components/Navbar';
import './styles/Login.css';

function Login () {
  return (
    <>
    <div className='navbar-wrapper'>
        <Navbar/>
    </div>
    <div className='login__page'>
    <div className="login__container">
      <form>
        <input placeholder="Username" type="text" required />
        <input placeholder="Password" type="password" required />
        <button className='butlog' type="button">LOG IN</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
