import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/workouts/')
      .then(response => {
        const parsedWorkouts = JSON.parse(response.data.workouts);
        setWorkouts(parsedWorkouts);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout.pk} className="border-b py-2">
            {workout.fields.title} - Duration: {workout.fields.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
