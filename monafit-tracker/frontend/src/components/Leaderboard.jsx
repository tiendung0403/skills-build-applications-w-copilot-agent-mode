import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/leaderboard/')
      .then(response => {
        const parsedLeaderboard = JSON.parse(response.data.leaderboard);
        setLeaderboard(parsedLeaderboard);
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <ul>
        {leaderboard.map(user => (
          <li key={user.pk} className="border-b py-2">
            {user.fields.username} - {user.fields.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
