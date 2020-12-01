import React from "react";
import Login from "../../global/Login";

const LoginPage = ({isAuth, setIsAuth}) => {
  return (
    <div>
      <Login setIsAuth={setIsAuth} active={!isAuth}/>
    </div>
  )
}

export default LoginPage;