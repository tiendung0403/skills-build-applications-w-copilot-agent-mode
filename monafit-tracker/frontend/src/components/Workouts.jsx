import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('https://super-space-barnacle-pjjjpr4vrvj739p75-8000.app.github.dev/api/workouts/')
      .then(response => {
        console.log('Fetched workouts:', response.data);
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Workouts</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={workout.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{workout.name}</td>
              <td className="border px-4 py-2">{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;