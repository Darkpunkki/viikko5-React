// UserContext.jsx
import {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useAuthentication} from '../hooks/apiHooks';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const {login} = useAuthentication();

  console.log('user in userprovider: ', user);

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      console.log('dologin', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <UserContext.Provider value={{user, setUser, handleLogin}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const useUserContext = () => useContext(UserContext);
