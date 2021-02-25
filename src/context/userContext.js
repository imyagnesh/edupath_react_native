import React, {createContext, useEffect, useState} from 'react';
import {getData} from '../utils';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const checkAUTH = async () => {
      try {
        const token = await getData('token');
        if (token) {
          setUser(token);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    checkAUTH();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser, loading, error}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
