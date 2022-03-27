import { createContext, useState } from "react";
import api from '../../api/index';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const handleLogin = (username, password) => setToken(await api.auth.login(username, password));

  return (
    <AuthContext.Provider value={{token, handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };