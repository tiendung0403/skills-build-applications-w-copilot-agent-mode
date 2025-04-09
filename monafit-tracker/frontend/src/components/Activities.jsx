import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/activities/')
      .then(response => {
        const parsedActivities = JSON.parse(response.data.activities);
        setActivities(parsedActivities);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.pk} className="border-b py-2">
            {activity.fields.name} - {activity.fields.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
