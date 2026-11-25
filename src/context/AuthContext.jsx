import { createContext, useContext, useState, useEffect } from "react";
import config from "../config";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);
const STORAGE_KEY = "calabar-admin-user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [session, setSession] = useState(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(user));
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      const restoreSession = async () => {
        // immplement logic to restore session from local storage or API
        const response = await fetch(`${config.API_URL}/api/auth/me`, {
          method: "GET",
          credentials: "include"
        });
        
        if (response.ok) {
          const res = await response.json();
          setUser(res.user);
          console.log("INITIAL REFRESH: ", user);
          setIsAuthenticated(true);
        }
      }
      restoreSession().finally(() => setLoading(false));
    }, []);
 const signup = async (name, email, password) => {
  try {
    setLoading(true);
    const response = await fetch(`${config.API_URL}/api/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fullname: name, email: email, password: password })
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }finally {
    setLoading(false);
  }
};

 const login = async (email, password) => {
  try {
    setLoading(true);
    console.log("API URL: ", config.API_URL);
    const response = await fetch(`${config.API_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    });

    if (!response.ok) {
      setUser(null);
      throw new Error("Login failed");
    }

    const res = await response.json();
    // return res.user;
    setUser(res.user);
    setIsAuthenticated(true);  
    navigate("/");

  } catch (error) {
    console.error("Login error:", error);
    setUser(null);
    throw error;
  }finally {
    setLoading(false);
  }
};

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: Boolean(user), signup, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}