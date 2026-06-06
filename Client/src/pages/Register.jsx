import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />

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

      <button onClick={registerUser}>
        Register
      </button>

      <Link to="/">
        Login
      </Link>
    </div>
  );
}

export default Register;