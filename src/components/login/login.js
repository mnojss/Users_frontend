import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

 const login = () => {
  axios
    .post("https://users-backend-m5fe.onrender.com/login", user)
    .then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      Navigate("/homepage");
    })
    .catch((error) => {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    });
};


  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => Navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
