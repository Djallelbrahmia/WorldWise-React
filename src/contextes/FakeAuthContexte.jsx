import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login": {
      console.log("caling reducer");
      return { ...state, user: action.payload, isAuthenticated: true };
    }
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw Error("Unknown action");
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initState);
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw Error("AuthContexte Used Outside the AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
