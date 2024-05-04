"use client"
import { useState } from "react";
import SignIn from "./SignIn";
import ChangeDetails from "./ChangeDetails";

export default function Login() {
  const [login, setLogin] = useState<Boolean>(true);
  const handleLogin = (bool: boolean) => {
    setLogin(bool);
  };

  return <>{!login ? <SignIn handleLogin={handleLogin} /> : <ChangeDetails/>}</>;
}
