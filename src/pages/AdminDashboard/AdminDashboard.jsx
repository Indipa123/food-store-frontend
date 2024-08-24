import { useState, useEffect } from 'react';
import './AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/admin/data"); 
        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {adminData ? (
        <div>
          <p>Welcome, {adminData.name}</p>
          {/* Display admin data */}
        </div>
      ) : (
        <p>Loading admin data...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
