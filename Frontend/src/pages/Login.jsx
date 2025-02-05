import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:6969/api/user/login",
        formData
      );
      setSuccess(response.data.message);
      console.log(response.data);

      // Clear form after success
      setFormData({ email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
