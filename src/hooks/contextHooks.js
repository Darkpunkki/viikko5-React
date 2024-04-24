// contextHooks.js
import {useContext} from 'react';
import {useUserContext} from '../contexts/UserContext';

// Current recommendation is to use custom hook instead of the context directly
// this way we don't have errors when UserContext is not defined or null (thats why we have the if statement)

const useUser = () => {
  const context = useContext(useUserContext);
  if (!context) {
    throw new Error('useUserContext must be used within an UserProvider');
  }

  return context;
};

export {useUser};
