import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/teams/')
      .then(response => {
        console.log('Fetched teams:', response.data);
        setTeams(Array.isArray(response.data) ? response.data : response.data.teams);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th> {/* Cột số thứ tự */}
            <th className="border px-4 py-2">Team Name</th>
            <th className="border px-4 py-2">Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team._id}>
              <td className="border px-4 py-2">{index + 1}</td> {/* Hiển thị số thứ tự */}
              <td className="border px-4 py-2">{team.name}</td>
              <td className="border px-4 py-2">
                {team.members.map((member) => (
                  <div key={member._id}>
                    <strong>{member.username}</strong> ({member.email})
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;