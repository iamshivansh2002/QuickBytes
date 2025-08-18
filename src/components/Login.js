


import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setIsLoggedIn, setEmail } = useOutletContext();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setEmail(inputEmail);
    navigate('/');
  };

  return (
    <div className="login-page-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

