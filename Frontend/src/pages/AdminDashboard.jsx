import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await axios.get(
        "http://localhost:6969/api/admin/status",
        {
          withCredentials: true,
        }
      );
      if (!response.data.loggedIn) {
        navigate("/admin/login");
      }
    } catch (err) {
      console.error(err);
      navigate("/admin/login");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:6969/api/admin/logout",
        {},
        { withCredentials: true }
      );
      navigate("/admin/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
