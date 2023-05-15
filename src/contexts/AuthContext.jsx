import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [auth, setAuth] = useState("This is coming from Context JS");
  const [isLogin,setIsLogin] =  useState(false)
  const [Role,setRole] =  useState("")

 
  const Server_url = "http://localhost:3000"


  useEffect(()=>{

  const cookies = read_cookie("isLogin")

  if(cookies === true){
    return setIsLogin(true)
  }

  },[])


  return (
    <AuthContext.Provider value={{auth, setAuth,Server_url,isLogin,setIsLogin,Role,setRole}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 