import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/dashboard/')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p>Total Users: {stats.total_users}</p>
      <p>Total Teams: {stats.total_teams}</p>
      <p>Total Activities: {stats.total_activities}</p>
    </div>
  );
};

export default Dashboard;
