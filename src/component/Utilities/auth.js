import { useContext } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
