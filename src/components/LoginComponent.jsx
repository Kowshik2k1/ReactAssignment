// Question - 5
import React from "react";

export default function LoginComponent({ isLoggedIn }) {
  return <>{isLoggedIn ? <button>LogOut</button> : <button>Login</button>}</>;
}
