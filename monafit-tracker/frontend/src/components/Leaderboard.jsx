import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/leaderboard/')
      .then(response => {
        console.log('Fetched leaderboard:', response.data);
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🏆 Leaderboard 🏆</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="text-left px-6 py-3">#</th>
              <th className="text-left px-6 py-3">Username</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry._id} className="border-b hover:bg-gray-100 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{entry.user.username}</td>
                <td className="px-6 py-4">{entry.user.email}</td>
                <td className="px-6 py-4 font-semibold">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
