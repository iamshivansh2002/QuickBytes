import { useNavigate } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { useSelector } from 'react-redux';

const Header = ({ isLoggedIn, setIsLoggedIn, email }) => {
  const isOnline = useOnline();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1744180742~exp=1744184342~hmac=1b87beb36c32d61841d56f35039d90bf6ead9667a0fb0eb4971e0a61e19ae1e4&w=826"
          alt="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className="nav-wrapper">
        <div className="nav-items">
          <ul>
            <li>
              <button className="link-btn" onClick={() => navigate('/')}>
                Home
              </button>
            </li>
            <li>
              <button className="link-btn" onClick={() => navigate('/about')}>
                About
              </button>
            </li>
            <li>
              <button className="link-btn" onClick={() => navigate('/contact')}>
                Contact
              </button>
            </li>

           

            <li>
              <button className="link-btn" onClick={() => navigate('/cart')}>
                <i className="fa fa-shopping-cart">
                  <sup style={{ fontSize: '12px', marginLeft: '4px' }}>
                    {cartItems?.length || 0}
                  </sup>
                </i>
              </button>
            </li>
          </ul>
        </div>

        {isOnline ? (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            {isLoggedIn ? (
              <>
                <span
                  style={{
                    marginRight: 10,
                    color: 'green',
                    fontWeight: '600',
                    fontSize: '14px',
                    alignSelf: 'center',
                  }}
                >
                  {email}
                </span>
                <button className="login-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className="login-btn" onClick={() => navigate('/login')}>
                Login
              </button>
            )}

            <h1 style={{ fontSize: 10, display: 'inline', marginLeft: 5 }}>
              🟢
            </h1>
          </div>
        ) : (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ marginRight: 5 }}>Offline</span>
            <h1 style={{ fontSize: 10, display: 'inline' }}>🔴</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;



