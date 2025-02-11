import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

export let AuthProvider = ({ children }) => {

  const tokenData = JSON.parse(localStorage.getItem("token"));
  let [authValue, setAuthValue] = useState(tokenData?.token || tokenData ? true : false);
    
  return (
    <AuthContext.Provider value={{ authValue, setAuthValue }}>
      {children}
    </AuthContext.Provider>
  );
};
