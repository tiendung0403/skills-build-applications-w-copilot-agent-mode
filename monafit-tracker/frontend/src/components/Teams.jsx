import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/teams/')
      .then(response => {
        const parsedTeams = JSON.parse(response.data.teams);
        setTeams(parsedTeams);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.pk} className="border-b py-2">
            {team.fields.name} - Members: {team.fields.members_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
