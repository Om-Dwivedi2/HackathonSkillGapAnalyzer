import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('careerlens_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email) => {
    // Extract first part of email for display name
    const name = email.split('@')[0];
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const userData = { name: capitalizedName, email };
    setUser(userData);
    localStorage.setItem('careerlens_user', JSON.stringify(userData));
  };

  const signup = (name, email) => {
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem('careerlens_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('careerlens_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
