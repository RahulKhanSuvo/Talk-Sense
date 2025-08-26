import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const user = {
    name: "John Doe",
    email: "",
  };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
