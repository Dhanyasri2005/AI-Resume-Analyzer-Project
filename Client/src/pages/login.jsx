import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/home");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="container">
      <h1>AI Resume Analyzer</h1>

      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />

      <button onClick={loginUser}>
        Login
      </button>

      <p>
        Don't have an account?
        <Link to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;